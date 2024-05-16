import { useEffect, useState } from "react"

function Content() {
    const [avatar, setAvatar] = useState();
    const handleChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            file.preview = URL.createObjectURL(file);
            setAvatar(file)
        }
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatar)
        }
    }, [avatar])
    return (
        <div>
            <input
                type="file"
                alt=""
                onChange={handleChange}
            ></input>
            <img src={avatar && avatar.preview} width="80%" alt=""></img>
        </div>
    )
}

export default Content