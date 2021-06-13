import React from 'react'
import { Menu, Input } from "semantic-ui-react";

export default function SearchJobPositions() {
    return (
        <div>            
            <Menu.Item>
              <Input icon='search' placeholder='Search Job Positions...' />
            </Menu.Item>
        </div>
    )
}
