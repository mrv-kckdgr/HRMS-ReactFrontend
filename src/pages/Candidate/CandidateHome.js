import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";


export default function CandidateHome() {

    return (
        <div>
            <Header as='h3' block color="purple">New CV</Header>
            <Link to="/resume/add">
                <Button color="purple" type="submit">Add</Button>
            </Link>

            <Header as='h3' block color="purple">Update CV</Header>
            <Link to="/resume/update/1">
                <Button color="purple" type="submit">Update</Button>
            </Link>
        </div>

    );
}