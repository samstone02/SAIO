export default function DevContactInfo(props) {
    return (
        <div className="dev-sec mt-6">
            <div className="flex justify-between mt-3">
                <h3>{props.name} - {props.role}</h3>
                <div className="flex justify-between w-1/3">
                    <a href={props.profileLink}>Profile</a>
                    <a href={`mailto:${props.role}`}>Contact</a>
                </div>
            </div>
            <p className="mt-1 fourthColor text-justify">
                {props.desc}
            </p>
        </div>
    )
}