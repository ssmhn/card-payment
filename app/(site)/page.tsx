"use client"

import {Card} from '@page/Main/Card/Card'
import {Form} from '@page/Main/Form/Form'
import classes from '@page/Main/Main.module.scss'

export default function Home() {
    return (
        <div className={classes.Wrapper}>
            <Card />
            <Form />
        </div>
    )
}
