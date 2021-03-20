import React, { Component } from 'react'
import './Cards.css'
import image5 from '../images/image5.jpg'
import i1 from '../images/icons8-chat.png'
import i2 from '../images/icons8-end_call.png'
import i3 from '../images/icons8-facebook_like 1.png'
import i4 from '../images/icons8-video_call.png'
import i5 from '../images/icons8-bookmark.png'
import i6 from '../images/Group.png'
import i7 from '../images/Vector.png'

export class Cards extends Component {
    render() {
        return (
            <div className="">
                <div className="cards">
                <div className="row Cards_zeroRow">
                <div className="Cards_area_div">
                                <span className="Cards_areaNearby">~{this.props.areaNearby}km~</span>
                                <div className="Cards_area">{this.props.area}</div>
                            </div>
                        
                <div className="bookmark_svg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<rect width="20" height="20" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use href="#image0" transform="scale(0.0104167)"/>
</pattern>
<image id="image0" width="96" height="96" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAABPRJREFUeAHtnT1oFEEUx3f2jiCJkTshCAloIWIRO8tUiqIWRhDSBBMSzB2mU0TSXqMgFqJFAhchIUIsAoKVIFFLK8HGoI2C4hcW1/gBujvj22CRyO243nt7M2f+Cwt3Ox/vzf837+1MAnNBgAsKQAEoAAWgABSAAlAACkCBraaAkh6wmZ7er7WeCow5Tn3vobtX2kab+/tK9l7TeB6ESs2rev2FpH0xAKZWK+r376+QcxfoLko66VFfEYG4GQ4MzKhaLZLwSwSAGRkpmHL5rgmCYQmnfO+DRLuv+vuHJSCEEoPVpdLlrSJ+oheN9YR+9+6qhHbsCDDV6l4dBGvkTJeEQx3URxQWCgfU3NxLjs/sCNBKnd2C4ieaF3UcVzjiJ23ZAIwxR7lOdHD7Y1zf2QAohyVLza16sccusVzcblM/7OnpVtevf7fV8bksrlbpnZt6sfc47AhIdQ0FmRQAgEwy5VcJAPLTNlPPAJBJpvwqAUB+2mbqGQAyyZRfJQkA9j9nNBq2ZVx+I+uQniUAdMhQ/XQTABxzAQAAcKyAY/OIAABwrIBj8xIRYF+GOh6g7+YlANjH2NuLfYBFofwBWIyjSOBfkhCRpwAigKcfuzUAsCXkdQAAPP3YrSUAYBnKwCABwG7+40csQy0K5Q/AYhxFWIY6nwOIAMcIAAAAHCvg2LxEBGAZyoAoAYBhHk3zB1AuYx9gmWf5A7AYRxH2Ac7nACLAMQIA+A8AYBnKgIgIYIgn0TR/AP39WIZaSOUPwGIcRViGOp8DiADHCAAAABwr4Ni8RARgH8CAKAGAYR5N8wfw/Dn2AZZ5lj8Ai3EUYR/gfA4gAhwjAID/AACWoQyIEkeWOVnl0HGZ3bFSp5OxF4y5S0cKf2Po4KypRAqyR8DgoCggMzV1kM5xu0Fnlb5VxtxObvr8gZ4t/axUjpAxuz/OpG5uWCICmvcs+NScOzegjTlD5zafJbH3Nel6Bz0bo8O1x3S1+iY25k5YLNbpUNVXTep69chbAGZiYlvc1XWSRB2n09iTk9iz+ro7UGqGDlW9FFUqT1QYLtEJt8tqdvaLV8r/dibroNrme5JidBiO00w/Q7lkJx0M26ptYqeGKGqGdBRdoxR1j6JoqTg//5D6bbnTVp1Ja+cFgAwpJs3/rM+9TVESAFp66TFSTFbR0+p5laIkAKQNtOlzwRTTtP9/eOhFimoLgDakmH/QvWlVZymqpfSxcQj0covpe+p+ggys0hvvsK3Oxv4yfv5MK53lUOvFpD69tCfoZTtKH/uS70KXJt8fke9HbP0V6nWWhhIRYHXgbwOwDe6PspgMPabVUb3QaNxTKys/NpSfp59RuRiVSocKSiWnbZ+iMu4PSoSCvm9wdfNHCQCbe5T/tkazfSmM40V169antO4JSBKJq8lNv+RUpr3DiNF6fH0pmtbIg+fW2ZvFP0pBNCnFt/8N6nOFUkydRH+axY+0OqZSGSQHxwjiBNXZlVav1efcFCQBgCJV5LKlGLaB5JeehFPUuk9cAD6koEwphkvA1xTlKgLEUgwXDDdFcSOgnQByTTFsEC2mKC6AdqSgtqQYLgBXKSqvCPAmxXDB/C1FcSNAEoDXKYYNIiVFcQFIpKBn9GeAxTCKltXCwmfuQH1tvylFTU726WJx9PfewleX4RcUgAJQAApAASgABaAAFIACnirwC3QXtjTB5ceDAAAAAElFTkSuQmCC"/>
</defs>
</svg>

                            {/* <svg width="12" height="16"  viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 2.81C1 2.32996 1.1907 1.86958 1.53014 1.53014C1.86958 1.1907 2.32996 1 2.81 1H11.86C12.34 1 12.8004 1.1907 13.1399 1.53014C13.4793 1.86958 13.67 2.32996 13.67 2.81V17.29L7.335 14.1225L1 17.29V2.81Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> */}
                            </div>

                </div>
                    <div className="row Cards_firstRow">
                        {/* <div className="col-2 Cards_docPic">
                            <img 
                            // src={image5} 
                            // alt="Doctor's Photo"
                            className="Cards_doctorImage"
                            />
                        </div> */}
                        <div className=" Cards_doctorInfo">
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
                        {/* <div className="col-2 Cards_veriBook text-right">
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

                    <div className="row Cards_secondRow">
                        <div className="col-9 Cards_clinicName_col align-middle">
                            <div className="Cards_clinicName">
                                {this.props.clinicName}
                            </div>
                        </div>

                        {/* <div className="col-3 Cards_price_col align-middle">
                            <div className="Cards_price">
                                <span className="Cards_rsSign">₹</span>
                                <span className="Cards_rs">{this.props.price}</span>
                            </div>
                        </div> */}
                    </div>

                    <div className="row Cards_thirdRow">
                        <div className="col-3 message_svg">
                        <img 
                            src={i1} 
                            className="Cards_chatIcon"
                            />


                        </div>
                            <div className="col-3 vid_svg">
                            <img 
                            src={i4} 
                            className="Cards_videoIcon"
                            />


                            </div>
                            
                            <div className="col-3 call_svg">
                            <img 
                            src={i2} 
                            className="Cards_callIcon"
                            />


                            </div>

                            <div className="col-3 Cards_price_col ">
                            <div className="Cards_price">
                                <span className="Cards_rsSign">₹</span>
                                <span className="Cards_rs">{this.props.price}</span>
                            </div>
                        </div>
                        
                        </div>
                            {/* <div className="Cards_area_div">
                                <span className="Cards_areaNearby">~{this.props.areaNearby}km~</span>
                                <div className="Cards_area">{this.props.area}</div>
                            </div> */}


                    
                     {/* <div className="row Cards_fourthRow">
                    <div className="call_svg">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<rect x="15" y="32.0352" width="22" height="22" transform="rotate(-131 15 32.0352)" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use href="#image0" transform="scale(0.0104167)"/>
</pattern>
<image id="image0" width="96" height="96" href="data:image/png;base64,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"/>
</defs>
</svg>

                    </div> */}
                    {/* <div className="verification_svg "> 
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

    </div> */}
                            
                            </div> 
                
                </div>
                
        )
        
    }
}

export default Cards
