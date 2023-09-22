import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/pine-tree-fire'


export const FireLocationMarker = ({ lat, lng, onClick }) => {
    return (
        <span className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="fire-location-icon" />
        </span>
    )
}