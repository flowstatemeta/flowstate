import React, { useState } from 'react'
import { Button, Card, Stack, Text, useToast } from '@sanity/ui'
import { useClient, useFormValue } from 'sanity'

export const ReferralExport = () => {
  const client = useClient({ apiVersion: '2024-01-01' })
  const docId = useFormValue(['_id']) as string
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleExport = async () => {
    setIsLoading(true)
    try {
      // Ensure we query the published document ID (remove 'drafts.' prefix if present)
      // This guarantees we fetch the data updated by the server actions.
      const publishedId = docId.replace(/^drafts\./, '')

      // Fetch referral data AND the questionnaire schema to map keys to titles
      const query = `{
        "referral": *[_id == $publishedId][0]{
          code,
          "pending": pendingUsers[]->{
            _id,
            name,
            email,
            phoneNumber,
            questionnaireAnswers,
            questionnaireCompletedAt,
            createdAt,
            _createdAt
          },
          "paid": paidUsers[]->{
            _id,
            name,
            email,
            phoneNumber,
            questionnaireAnswers,
            questionnaireCompletedAt,
            registeredAt
          }
        },
        "questionnaire": *[_type == "questionnaire"][0]
      }`

      const result = await client.fetch(query, { publishedId })
      const { referral, questionnaire } = result || {}

      if (!referral) {
        toast.push({ status: 'error', title: 'Document not found' })
        return
      }

      // 1. Build a map of Question IDs (_key) to Question Titles
      const questionTitleMap: Record<string, string> = {}
      if (questionnaire?.pages) {
        questionnaire.pages.forEach((page: any) => {
          if (page._key) {
            // Use the question text or heading as the column title
            questionTitleMap[page._key] = page.question || page.heading || 'Question'
          }
        })
      }

      // Get a set of IDs for paid users to filter them out of pending (avoid duplicates)
      const paidIds = new Set((referral.paid || []).filter((u: any) => u).map((u: any) => u._id))

      // 2. Combine all users
      const allUsers = [
        // Only include pending users if they are NOT in the paid list
        ...(referral.pending || [])
          .filter((u: any) => u && !paidIds.has(u._id))
          .map((u: any) => ({ ...u, status: 'Pending (Lead)' })),
        ...(referral.paid || [])
          .filter((u: any) => u)
          .map((u: any) => ({ ...u, status: 'Paid (Customer)' }))
      ]

      // 3. Collect all unique answer keys from all users
      const allKeys = new Set<string>()
      allUsers.forEach(user => {
        let answers = user.questionnaireAnswers
        // Handle case where answers might be stored as a string
        if (typeof answers === 'string') {
          try { answers = JSON.parse(answers) } catch {}
        }
        if (answers && typeof answers === 'object') {
          Object.keys(answers).forEach(k => allKeys.add(k))
        }
      })

      // 4. Sort keys based on the order in the questionnaire (if available)
      const sortedKeys = Array.from(allKeys).sort((a, b) => {
        if (questionnaire?.pages) {
          const indexA = questionnaire.pages.findIndex((p: any) => p._key === a)
          const indexB = questionnaire.pages.findIndex((p: any) => p._key === b)
          if (indexA !== -1 && indexB !== -1) return indexA - indexB
          if (indexA !== -1) return -1
          if (indexB !== -1) return 1
        }
        return a.localeCompare(b)
      })

      // Helper to escape CSV values
      const escapeCsv = (val: any) => {
        if (val === null || val === undefined) return ''
        const str = String(val)
        if (/[",\n]/.test(str)) {
          return `"${str.replace(/"/g, '""')}"`
        }
        return str
      }

      // Helper to format dates
      const formatDate = (dateStr: string) => {
        if (!dateStr) return ''
        return new Date(dateStr).toLocaleString()
      }

      const rows = []
      
      // CSV Header
      const headers = ['Status', 'Lead Date', 'Registered Date', 'Name', 'Phone', 'Email']
      sortedKeys.forEach(key => {
        headers.push(escapeCsv(questionTitleMap[key] || key))
      })
      rows.push(headers)

      // 5. Generate Data Rows
      allUsers.forEach(user => {
        let answers = user.questionnaireAnswers
        if (typeof answers === 'string') {
          try { answers = JSON.parse(answers) } catch {}
        }

        const row = [
          escapeCsv(user.status),
          escapeCsv(formatDate(user.questionnaireCompletedAt || user.createdAt || user._createdAt)), // Fallback to system _createdAt
          escapeCsv(formatDate(user.registeredAt)),
          escapeCsv(user.name || ''),
          escapeCsv(user.phoneNumber || ''),
          escapeCsv(user.email || '')
        ]

        // Add answer for each column
        sortedKeys.forEach(key => {
          const val = answers ? answers[key] : ''
          row.push(escapeCsv(val))
        })
        rows.push(row)
      })

      // Generate and Download CSV
      const csvContent = rows.map(e => e.join(",")).join("\n")
      // Add BOM (\uFEFF) for encoding AND "sep=," to force Excel to use comma delimiters
      const blob = new Blob(["\uFEFFsep=,\n" + csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.setAttribute("href", url)
      link.setAttribute("download", `referral_${referral.code || 'export'}.csv`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Clean up the URL object
      setTimeout(() => URL.revokeObjectURL(url), 100)

      toast.push({ status: 'success', title: 'Export successful' })
    } catch (err) {
      console.error(err)
      toast.push({ status: 'error', title: 'Export failed' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card padding={4} border radius={2} tone="transparent">
      <Stack space={3}>
        <Text size={1} weight="bold">Export Leads & Customers</Text>
        <Text size={1} muted>
          Download a CSV containing all pending leads and paid customers, including their questionnaire answers.
        </Text>
        <Button
          fontSize={2}
          padding={3}
          tone="primary"
          text={isLoading ? 'Exporting...' : 'Download CSV'}
          onClick={handleExport}
          disabled={isLoading}
        />
      </Stack>
    </Card>
  )
}