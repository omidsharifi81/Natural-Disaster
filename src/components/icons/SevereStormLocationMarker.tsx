import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/hurricane';

interface Props {
    lat: number
    lng: number
    onClick: () => void
}

export const SevereStormLocationMarker = ({ onClick }: Props)=> {
    return (
        <span className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="storm-location-icon" />
        </span>
    )
}