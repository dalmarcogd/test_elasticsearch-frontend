import React, { Component } from 'react';
import './login-page.css';
import _ from 'lodash'
import { Sidebar, Segment, Menu, Image, Icon, Header, Grid, Rail, Sticky } from 'semantic-ui-react'

const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

class LoginPage extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  
  handleContextRef = contextRef => this.setState({ contextRef })
	
  render() {
	const { visible } = this.state
	const { contextRef } = this.state
    return ( 
		<div>
			<Menu stackable>
				<Menu.Item onClick={this.toggleVisibility}>
				  <Icon name='sidebar' />
				</Menu.Item>

				<Menu.Item
				  name='features'
				  onClick={this.toggleVisibility}>
				  Features
				</Menu.Item>

				<Menu.Item
				  name='testimonials'
				  onClick={this.handleItemClick}>
				  Testimonials
				</Menu.Item>

				<Menu.Item
				  name='sign-in'
				  onClick={this.handleItemClick}
				>
				  Sign-in
				</Menu.Item>
			</Menu>
			<Sidebar.Pushable as={Segment}>
				<Sidebar as={Menu}  animation='push' width='thin' visible={visible} icon='labeled' vertical>
					<Menu.Item name='home'>
						<Icon name='home' />
						Home
					</Menu.Item>
				</Sidebar>
				<Sidebar.Pusher>					
					<Grid centered columns={3}>
						<Grid.Column>
						  <div ref={this.handleContextRef}>
							<Segment>
							  {_.times(10, i => <Placeholder key={i} />)}

							  <Rail position='left'>
								{_.times(3, i => <Placeholder key={i} />)}

								<Sticky context={contextRef}>
								  <Header as='h3'>Stuck Content</Header>
								  <Image src='/assets/images/wireframe/image.png' />
								</Sticky>
							  </Rail>

							  <Rail position='right'>
								<Sticky context={contextRef}>
								  <Header as='h3'>Stuck Content</Header>
								  <Image src='/assets/images/wireframe/image.png' />
								</Sticky>
							  </Rail>
							</Segment>
						  </div>
						</Grid.Column>
					</Grid>
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		</div>
    );
  }
}

export default LoginPage;
