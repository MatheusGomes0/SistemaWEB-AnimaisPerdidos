import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonLogin({type, label}: Props) {
    return (
        <Link to={to} className={styles.Input}>
        <Button size='lg' colorScheme='blue' type={type}>
            {label}
        </Button>
        </Link>
    )
}

export default ButtonLogin