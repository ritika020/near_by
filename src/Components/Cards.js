import React, { Component } from 'react'
import './Cards.css'
import image5 from '../images/image5.jpg'

export class Cards extends Component {
    render() {
        return (
            <div className="">
                <div className="cards">
                    <div className="row Cards_firstRow">
                        <div className="col-2 Cards_docPic">
                            <img 
                            // src={image5} 
                            // alt="Doctor's Photo"
                            className="Cards_doctorImage"
                            />
                        </div>
                        <div className="col-7 Cards_doctorInfo">
                            <div>
                                <div className="Cards_doctorName">
                                    {this.props.doctorName} 
                                </div>
                                <div className="Cards_doctorSpeciality">
                                    {this.props.speciality} 
                                    <span className="Cards_vrline">
                                    <svg width="2" height="13" viewBox="0 0 2 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1" y1="1" x2="0.999999" y2="12" stroke="#222222" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                    </span>

                                    <span className="Cards_rating">
                                    {this.props.rating}                                    
                                    </span>
                                    <span className="Cards_thumbs">
                                    <img className="Cards_thumbs_svg" src="https://img.icons8.com/material-rounded/24/4a90e2/thumb-up.png"/>
                                    </span>

                                </div>
                            </div>
                        </div>
                        {/* verification and bookmark */}
                        <div className="col-2 Cards_veriBook text-right">
                            <div className="verification_svg "> 
                            <svg width="17" height="16"  viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2096 8.5L16.278 6.29125L16.5471 3.37L13.6892 2.72083L12.193 0.1875L9.5013 1.34333L6.80964 0.1875L5.31339 2.71292L2.45547 3.35417L2.72464 6.28333L0.792969 8.5L2.72464 10.7087L2.45547 13.6379L5.31339 14.2871L6.80964 16.8125L9.5013 15.6488L12.193 16.8046L13.6892 14.2792L16.5471 13.63L16.278 10.7087L18.2096 8.5ZM7.98922 12.2367L4.98089 9.22042L6.15255 8.04875L7.98922 9.89333L12.6205 5.24625L13.7921 6.41792L7.98922 12.2367Z" fill="#21BC08"/>
                            </svg>
                            </div>
                            <div className="bookmark_svg">
                            <svg width="12" height="16"  viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 2.81C1 2.32996 1.1907 1.86958 1.53014 1.53014C1.86958 1.1907 2.32996 1 2.81 1H11.86C12.34 1 12.8004 1.1907 13.1399 1.53014C13.4793 1.86958 13.67 2.32996 13.67 2.81V17.29L7.335 14.1225L1 17.29V2.81Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                            <div className="video_svg">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                            <rect width="17" height="17" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use href="#image0" transform="scale(0.01)"/>
                            </pattern>
                            <image id="image0" width="100" height="100" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEoklEQVR4Xu2d32scdRTFz41sWGk0D4oKpkKVUn2yj77pg88+WCPSupjgzBiIPwjoQ7UPWxEt+BAwYnG+iwQVSwUR+pf42iCCluYPMBU1v65Mmg1xs0nuNjPfvbs5eb6558z5zE0yk507An65SkBcuaEZEIizk4BACMRZAs7scEIIxFkCzuxwQgjEWQLO7HBCCMRZAs7scEIIxFkCzuxwQgjEWQLO7HBCCMRZAs7scEIGAcjc3Nz9Kysr50TkJQDPAngcwAln3suy8xeA2wB+AXBjbW3tp8XFxX/Kat5rnz0TkmXZG6r6CYCJXpsNQ72I3FLVj0II3/XjeHaAZFlWA/Clqmb9MOJQ82sReSfP87WY3naApGl6FcBMTPEB0PomhPBmTJ9bQLZ/TC3GFB4ULVVttFqt72P5lampqfro6OiSqp6MJTpgOrfHxsZOz8/P/x3DtyRJ8rqI9OUXWIwDLENDRC7kef5DGb0O6pEkySlJ0/RHAJNViw1yfxG5nuf5a1Udw8zMzCMbGxuXALxVAPkVwFNViQ1J36UQwpmyj6XRaJyo1+tvA/gQwINF/wLInSG+6CsrwzshhAfKajY5OTk6Pj4+JSIfA3h0d98CiJYlNMx9QghHvs3UbDZHlpeXzwG4oqpPdsuLQIxn0VGBpGn6IoDPAZw9SJJAKgaSJMlzInIFwPMWKQKxpASg1wlJkuQZEbnc61+wBFIykOnp6ZO1Wu2Sqha3XO4ztt8pIxBjYodNyOzs7EOrq6sfAHgPQN3Ydk8ZgRiT2w/IrmuJiwDGje32LSMQY4KdQIp/V2xubk4DuCwijxnbHFpGIIdGdLegE0iapr8BOGX8dnMZgRij6gKkkgtqAiEQYwLOyjghBOIsAWd2OCEE4iwBZ3Y4IQTiLAFndjghBOIsAWd2OCEE4iwBZ3Y4IQTiLAFndjghBOIsAWd2OCEE4iwBZ3Y4IQTiLAFndjghBOIsAWd2OCEE4iwBZ3Y4IQTiLAFndvhRUudA+GHrPgPi4wh9BtApzwd2BgxI2y4faYsE7rAJ6bSx66HPV4oFDVabfBzBmFSvQNpttx+L/gzACxYpArGkdA+PRXe25eIAY9DWsnudkN3926s1VLWYmK4Lf4oJWQEwZjV2TOv+DCEc+QnbdnYHXcMUQJYAnD6mQZsOW0Ru5nn+tKm4h6L91jNdB/BqD32OY+m1EML5qg48y7KHVfX9YulAMSEXAERb8ljVQVXZV1XPt1qta1VqFL23VvwVSzBrtdpNAE9ULTig/X+v1+tnFhYW/o3hf+uCJU3TBoBvYwgOmkasBZjtXLhI+eAz5KsQwmzMk+h/q8ZV9Qtut74bv6penZiYeLfZbK73BUhbtNjjOzIy8ukxXqz8h4hcjLGntxvorje9trddvwygeF3FWVUt3pQwzK+ruFW8rkJVb6yvr//s6nUVMceTWnsTMN8WZnhxEiCQODmbVQjEHFWcQgKJk7NZhUDMUcUpJJA4OZtVCMQcVZxCAomTs1mFQMxRxSkkkDg5m1UIxBxVnEICiZOzWYVAzFHFKSSQODmbVQjEHFWcQgKJk7NZhUDMUcUp/A8vluX8C32HnwAAAABJRU5ErkJggg=="/>
                            </defs>
                            </svg>

    
                            </div>
                        </div>
                    </div>

                    <div className="row Cards_secondRow">
                        <div className="col-9 Cards_clinicName_col align-middle">
                            <div className="Cards_clinicName">
                                {this.props.clinicName}
                            </div>
                        </div>

                        <div className="col-3 Cards_price_col align-middle">
                            <div className="Cards_price">
                                <span className="Cards_rsSign">₹</span>
                                <span className="Cards_rs">{this.props.price}</span>
                            </div>
                        </div>
                    </div>

                    <div className="row Cards_thirdRow">
                        <div className="col-4 Cards_area_col">
                            <div className="Cards_area_div">
                                <span className="Cards_areaNearby">~{this.props.areaNearby}km~</span>
                                <div className="Cards_area">{this.props.area}</div>
                            </div>
                        </div>


                    </div>
                    {/* <div className="row Cards_fourthRow">

                    <div className="verification_svg "> 
                            <svg width="17" height="16"  viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2096 8.5L16.278 6.29125L16.5471 3.37L13.6892 2.72083L12.193 0.1875L9.5013 1.34333L6.80964 0.1875L5.31339 2.71292L2.45547 3.35417L2.72464 6.28333L0.792969 8.5L2.72464 10.7087L2.45547 13.6379L5.31339 14.2871L6.80964 16.8125L9.5013 15.6488L12.193 16.8046L13.6892 14.2792L16.5471 13.63L16.278 10.7087L18.2096 8.5ZM7.98922 12.2367L4.98089 9.22042L6.15255 8.04875L7.98922 9.89333L12.6205 5.24625L13.7921 6.41792L7.98922 12.2367Z" fill="#21BC08"/>
                            </svg>
                            </div>
                            <div className="bookmark_svg">
                            <svg width="12" height="16"  viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 2.81C1 2.32996 1.1907 1.86958 1.53014 1.53014C1.86958 1.1907 2.32996 1 2.81 1H11.86C12.34 1 12.8004 1.1907 13.1399 1.53014C13.4793 1.86958 13.67 2.32996 13.67 2.81V17.29L7.335 14.1225L1 17.29V2.81Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                            <div className="video_svg">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                            <rect width="17" height="17" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use href="#image0" transform="scale(0.01)"/>
                            </pattern>
                            <image id="image0" width="100" height="100" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEoklEQVR4Xu2d32scdRTFz41sWGk0D4oKpkKVUn2yj77pg88+WCPSupjgzBiIPwjoQ7UPWxEt+BAwYnG+iwQVSwUR+pf42iCCluYPMBU1v65Mmg1xs0nuNjPfvbs5eb6558z5zE0yk507An65SkBcuaEZEIizk4BACMRZAs7scEIIxFkCzuxwQgjEWQLO7HBCCMRZAs7scEIIxFkCzuxwQgjEWQLO7HBCCMRZAs7scEIGAcjc3Nz9Kysr50TkJQDPAngcwAln3suy8xeA2wB+AXBjbW3tp8XFxX/Kat5rnz0TkmXZG6r6CYCJXpsNQ72I3FLVj0II3/XjeHaAZFlWA/Clqmb9MOJQ82sReSfP87WY3naApGl6FcBMTPEB0PomhPBmTJ9bQLZ/TC3GFB4ULVVttFqt72P5lampqfro6OiSqp6MJTpgOrfHxsZOz8/P/x3DtyRJ8rqI9OUXWIwDLENDRC7kef5DGb0O6pEkySlJ0/RHAJNViw1yfxG5nuf5a1Udw8zMzCMbGxuXALxVAPkVwFNViQ1J36UQwpmyj6XRaJyo1+tvA/gQwINF/wLInSG+6CsrwzshhAfKajY5OTk6Pj4+JSIfA3h0d98CiJYlNMx9QghHvs3UbDZHlpeXzwG4oqpPdsuLQIxn0VGBpGn6IoDPAZw9SJJAKgaSJMlzInIFwPMWKQKxpASg1wlJkuQZEbnc61+wBFIykOnp6ZO1Wu2Sqha3XO4ztt8pIxBjYodNyOzs7EOrq6sfAHgPQN3Ydk8ZgRiT2w/IrmuJiwDGje32LSMQY4KdQIp/V2xubk4DuCwijxnbHFpGIIdGdLegE0iapr8BOGX8dnMZgRij6gKkkgtqAiEQYwLOyjghBOIsAWd2OCEE4iwBZ3Y4IQTiLAFndjghBOIsAWd2OCEE4iwBZ3Y4IQTiLAFndjghBOIsAWd2OCEE4iwBZ3Y4IQTiLAFndjghBOIsAWd2OCEE4iwBZ3Y4IQTiLAFndvhRUudA+GHrPgPi4wh9BtApzwd2BgxI2y4faYsE7rAJ6bSx66HPV4oFDVabfBzBmFSvQNpttx+L/gzACxYpArGkdA+PRXe25eIAY9DWsnudkN3926s1VLWYmK4Lf4oJWQEwZjV2TOv+DCEc+QnbdnYHXcMUQJYAnD6mQZsOW0Ru5nn+tKm4h6L91jNdB/BqD32OY+m1EML5qg48y7KHVfX9YulAMSEXAERb8ljVQVXZV1XPt1qta1VqFL23VvwVSzBrtdpNAE9ULTig/X+v1+tnFhYW/o3hf+uCJU3TBoBvYwgOmkasBZjtXLhI+eAz5KsQwmzMk+h/q8ZV9Qtut74bv6penZiYeLfZbK73BUhbtNjjOzIy8ukxXqz8h4hcjLGntxvorje9trddvwygeF3FWVUt3pQwzK+ruFW8rkJVb6yvr//s6nUVMceTWnsTMN8WZnhxEiCQODmbVQjEHFWcQgKJk7NZhUDMUcUpJJA4OZtVCMQcVZxCAomTs1mFQMxRxSkkkDg5m1UIxBxVnEICiZOzWYVAzFHFKSSQODmbVQjEHFWcQgKJk7NZhUDMUcUp/A8vluX8C32HnwAAAABJRU5ErkJggg=="/>
                            </defs>
                            </svg>

    </div>
                            </div> */}
                
                </div>
                </div>
        )
        
    }
}

export default Cards
