import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import MainSkills from './MainSkills'
import MainSkillsProjects from './MainSkillsProjects'
import MainFeaturedKnowledge from './MainFeaturedKnowledge'

export default class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             moreDetails: false,
             data: [
                {
                    skill: 'Front-End Web Developer',
                    className: 'webdev',
                    faIcon: 'fab fa-react',
                    breakdown: ['Web Sites', 'Web Applications'],
                    blurb: '',
                    demoProject1: '',
                    demoProject2: ''
                },  
                {
                    skill: 'Interactive React Applications',
                    className: 'react',
                    faIcon: 'fab fa-react',
                    breakdown: ['Axios'],
                    blurb: '',
                    demoProject1: '',
                    demoProject2: ''
                },  
                {
                    skill: 'Customized WordPress Sites',
                    className: 'wordpress',
                    faIcon: 'fab fa-wordpress',
                    breakdown: ['Theme Development', 'Yoast SEO', 'Advanced Custom Fields'],
                    blurb: 'Making a site that can be managed with zero technical experience is an amazing thing.',
                    demoProject1: 'grocerystoreinsider.com',
                    demoProject2: ''
                },  
                {
                    skill: 'Helpful NodeJS Applications',
                    className: 'nodejs',
                    faIcon: 'fab fa-node',
                    breakdown: ['MongoDB Integration', 'API Creation', 'Express'],
                    blurb: '',
                    demoProject1: 'gregrasmussen.com/store-system/webstore',
                    demoProject2: ''
                },
                {
                    skill: 'Useful JavaScript Tools',
                    className: 'javascript',
                    faIcon: 'fab fa-js',
                    breakdown: ['Fetch API', 'Calculations', ''],
                    blurb: '',
                    demoProject1: '',
                    demoProject2: ''
                },  
                {
                    skill: 'Successful Shopify Stores',
                    className: 'shopify',
                    faIcon: 'fab fa-shopify',
                    breakdown: ['Liquid', '', ''],
                    blurb: 'Your store needs to reflect your brand image and have a chance to tell its story.',
                    demoProject1: '',
                    demoProject2: ''
                },
                {
                    skill: 'Cascading Style Sheets',
                    className: 'css',
                    faIcon: 'fab fa-css3-alt',
                    breakdown: ['Responsive Sizing', 'SASS', 'Styled Components Package for React'],
                    blurb: 'There are many ways to put your best work out there for the world to see.',
                    demoProject1: '',
                    demoProject2: ''
                },  
                {
                    skill: 'Great Static Sites',
                    className: 'static-sites',
                    faIcon: 'fas fa-exclamation',
                    breakdown: ['HTML Landing Pages', 'Gatsby', 'Bootstrap'],
                    blurb: 'Not everything needs to be fancy. Sometimes less really can be more.',
                    demoProject1: '',
                    demoProject2: ''
                },  
                {
                    skill: 'Thoughtful Webpage Design',
                    className: 'webpage-design',
                    faIcon: 'fas fa-low-vision',
                    breakdown: ['UI/UX', 'Information', 'Accessibility'],
                    blurb: 'Regardless of screen size or reader ability, the web and its content needs to be easily accessible to all.',
                    demoProject1: '',
                    demoProject2: ''
                },    
                {
                    skill: 'Focused Critical Thinking',
                    className: 'critical-thinking',
                    faIcon: 'fas fa-brain',
                    breakdown: ['Problem Solving', 'Creativity', 'Time Management'],
                    blurb: 'The Zone is one of my favourite places to be. Planning ahead makes me even more effective.',
                    demoProject1: '',
                    demoProject2: ''
                },
                {
                    skill: 'Years Of Experience',
                    className: 'experience',
                    faIcon: 'far fa-clock',
                    breakdown: ['Table-Based Design', 'Flash Animation', 'Paint Shop Pro'],
                    blurb: 'Technologies and methods come and go, but theres always been a love for design and development.',
                    demoProject1: '',
                    demoProject2: ''
                }
             ],
             index: 0
        }
    }


    // skillClickHandler = () => {
    //     window.addEventListener('click', () => {
    //         this.setState({
    //             index: this.state.index + 1
    //         })
    //         console.log('state: index ' + this.state.index)    
    //     }
    // ,{passive: true})
    // }
    


    componentDidMount()  {
        console.log('componentDidMount Main.js')
        console.log('this.state.data.length = ' + this.state.data.length)
        console.log('this.state.index + 1 = ' + (this.state.index + 1))

        window.addEventListener('click', () => {

            if (this.state.index + 1 > 10)  {
                this.setState({
                    index: 0
                })
            } else  {
                this.setState({
                    index: this.state.index + 1
                })    
            }
            this.props.changeBackgroundColour(this.state.data[this.state.index].className)
            
        }
        ,{passive: true})
    }

    componentDidUpdate()  {
        console.log('componentDidUpdate Main.js')
        
        // if((this.state.index + 1) > this.state.data.length)  {
        //     this.setState({
        //         index: 0
        //     })
        // }
    }    

    componentWillUnmount()  {
        console.log('componentWillUnmount Main.js')
            window.addEventListener('click', () => {
                if (this.state.index + 1 > 10)  {
                    this.setState({
                        index: 0
                    })
                } else  {
                    this.setState({
                        index: this.state.index + 1
                    })    
                }
            }
            ,{passive: true})
    }

    render() {
        return (
            <main className={this.state.data[this.state.index].className}>
                <h1>{this.state.data[this.state.index].skill}</h1>
                {this.state.moreDetails === false ? <MainSkills blurb={this.state.data[this.state.index].blurb} /> : <MainSkillsProjects project1={this.state.data[this.state.index].demoProject1} project2={this.state.data[this.state.index].demoProject2}/>}
                <MainFeaturedKnowledge skill1={this.state.data[this.state.index].breakdown[0]} skill2={this.state.data[this.state.index].breakdown[1]} skill3={this.state.data[this.state.index].breakdown[2]} />
            </main>
        ) 
    }
}
