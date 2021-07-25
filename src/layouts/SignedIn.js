import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedId() {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src=""></Image>
                <Dropdown pointing="top left" text="Merve">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Profile" icon="info"/>
                        <Dropdown.Item text="Logout" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
