import {DownloadIcon} from '@sanity/icons'
import {type DocumentActionProps, useClient} from 'sanity'

/**
 * Converts an array of objects into a CSV string.
 * @param items The array of objects to convert.
 * @returns A string in CSV format.
 */
function jsonToCsv(items: any[]): string {
  if (items.length === 0) {
    return 'No data available.'
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

export function ExportReferralAction(props: DocumentActionProps) {
  // Use the Sanity client to fetch data
  const client = useClient({apiVersion: '2024-05-01'})

  return {
    label: 'Export Users (CSV)',
    icon: DownloadIcon,
    onHandle: async () => {
      // 1. Fetch the referral document and expand the user references
      const doc = await client.fetch(
        `*[_type == "referralCode" && _id == $id][0]{
          code,
          "pendingUsers": pendingUsers[]->{name, email},
          "paidUsers": paidUsers[]->{name, email}
        }`,
        {id: props.id},
      )

      if (!doc) {
        console.error('Could not fetch referral document.')
        return
      }

      // 2. Combine pending and paid users into one list with a 'status' field
      const allUsers = [
        ...(doc.pendingUsers || []).map((user: any) => ({...user, status: 'pending'})),
        ...(doc.paidUsers || []).map((user: any) => ({...user, status: 'paid'})),
      ]

      // 3. Convert the list to a CSV string
      const csvData = jsonToCsv(allUsers)

      // 4. Create a blob and trigger a download
      const blob = new Blob([csvData], {type: 'text/csv;charset=utf-8;'})
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.setAttribute('href', url)
      link.setAttribute('download', `${doc.code}-referrals.csv`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    // This action is only available for published documents
    disabled: !props.published,
  }
}

