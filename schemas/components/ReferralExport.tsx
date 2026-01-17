import {DownloadIcon} from '@sanity/icons'
import {Button, Card, Flex, Text} from '@sanity/ui'
import {useCallback, useState} from 'react'
import {useClient, useFormValue} from 'sanity'

function jsonToCsv(items: any[]): string {
  if (items.length === 0) {
    return ''
  }
  const replacer = (_key: any, value: any) => (value === null ? '' : value)
  const header = Object.keys(items[0])
  const csv = [
    header.join(','), // Header row
    ...items.map((row) =>
      header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(','),
    ),
  ].join('\r\n')
  return csv
}

export function ReferralExport() {
  const client = useClient({apiVersion: '2024-05-01'})
  const id = useFormValue(['_id']) as string
  const code = useFormValue(['code']) as string
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = useCallback(async () => {
    setIsLoading(true)
    try {
      // Handle draft IDs if necessary
      const docId = id.startsWith('drafts.') ? id.slice(7) : id
      
      const doc = await client.fetch(
        `*[_type == "referralCode" && _id == $id][0]{
          "pendingUsers": pendingUsers[]->{name, email},
          "paidUsers": paidUsers[]->{name, email}
        }`,
        {id: docId},
      )

      if (!doc) {
        alert('Could not fetch data.')
        return
      }

      const allUsers = [
        ...(doc.pendingUsers || []).map((user: any) => ({...user, status: 'pending'})),
        ...(doc.paidUsers || []).map((user: any) => ({...user, status: 'paid'})),
      ]

      if (allUsers.length === 0) {
        alert('No users to export.')
        return
      }

      const csvData = jsonToCsv(allUsers)
      const blob = new Blob([csvData], {type: 'text/csv;charset=utf-8;'})
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.setAttribute('href', url)
      link.setAttribute('download', `${code || 'referral'}-users.csv`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error('Export failed:', err)
      alert('Export failed.')
    } finally {
      setIsLoading(false)
    }
  }, [client, id, code])

  return (
    <Card padding={3} border radius={2}>
      <Flex direction="column" gap={3}>
        <Text size={1} weight="bold">Export Data</Text>
        <Text size={1} muted>Download a CSV file of all pending and paid users.</Text>
        <Button
          icon={DownloadIcon}
          text="Export Users (CSV)"
          tone="primary"
          mode="ghost"
          onClick={handleDownload}
          loading={isLoading}
          disabled={!id}
        />
      </Flex>
    </Card>
  )
}
