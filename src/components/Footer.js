import React from "react";
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
  } from 'semantic-ui-react'

const CustomFooter = () =>{
    return (
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>               
                <Divider inverted section />
                <Image centered size='mini' src='/images/logo.png' />
                <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policy
                </List.Item>
                </List>
            </Container>
            </Segment>
    )
}

export default CustomFooter