import React, { Component } from 'react';
import logo from './logo.svg';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return ( 
		<div>
			<Menu stackable>
				<Menu.Item onClick={this.toggleVisibility}>
				  <Icon name='menu' />
				</Menu.Item>

				<Menu.Item
				  name='features'
				  active={activeItem === 'features'}
				  onClick={this.toggleVisibility}>
				  Features
				</Menu.Item>

				<Menu.Item
				  name='testimonials'
				  active={activeItem === 'testimonials'}
				  onClick={this.handleItemClick}>
				  Testimonials
				</Menu.Item>

				<Menu.Item
				  name='sign-in'
				  active={activeItem === 'sign-in'}
				  onClick={this.handleItemClick}
				>
				  Sign-in
				</Menu.Item>
			</Menu>
			<Sidebar.Pushable as={Segment}>
				<Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
					<Menu.Item name='home'>
						<Icon name='home' />
						Home
					</Menu.Item>
				</Sidebar>
				<Sidebar.Pusher>
					<Segment basic>
						<Header as='h3'>Application Content</Header>
						<Image src='/assets/images/wireframe/paragraph.png' />
					</Segment>
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		</div>
    );
  }
}

export default App;
