import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/pine-tree-fire'

interface Props {
    lat: number
    lng: number
    onClick: () => void
}

export const FireLocationMarker = ({ onClick }: Props) => {
  return ( 
    <span className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="fire-location-icon" />
    </span>
  )
}

