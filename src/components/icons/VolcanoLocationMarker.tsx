import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/terrain'

interface Props {
    lat: number
    lng: number
    onClick: () => void
}

export const VolcanoLocationMarker = ({ onClick }: Props)=> {
    return (
            <span className="location-marker" onClick={onClick}>
                <Icon icon={locationIcon} className="volcano-location-icon" />
            </span>
    )
}