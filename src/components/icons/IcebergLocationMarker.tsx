import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/snowflake';


interface Props {
    lat: number
    lng: number
    onClick: () => void
}

export const IcebergLocationMarker = ({ onClick }: Props)=> {
    return (
        <span className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="iceberg-location-icon" />
        </span>
    )
}