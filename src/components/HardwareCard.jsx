import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Card from './Card'

export default function HardwareCard({ id, name, image, overview }) {
  return (
    <Link to={useBaseUrl(`/hardware_pages/${id}`)} className="tw-block tw-no-underline">
      <Card>
        {image && (
          <img
            src={useBaseUrl(image)}
            alt={name}
            className="tw-w-full tw-h-48 tw-object-cover tw-rounded-xl"
          />
        )}
        <h3 className="tw-mt-4 tw-text-lg tw-font-semibold tw-text-base-content">
          {name}
        </h3>
        <p className="tw-mt-2 tw-text-sm tw-text-base-content tw-text-opacity-80">
          {overview}
        </p>
      </Card>
    </Link>
  )
}
