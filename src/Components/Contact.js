import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';


class Contact extends Component {

  constructor(props) {
	super(props);
	this.state = { name: '', email: '', subject: '', message: '', buttonShow: true };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
  if (event.target.id === "contactName"){
    this.setState({name: event.target.value})
  } else if (event.target.id === "contactEmail") {
    this.setState({email: event.target.value})
  } else if (event.target.id === "contactSubject") {
    this.setState({subject: event.target.value})
  } else {
    this.setState({message: event.target.value})
    }
  }


   handleSubmit(event) {
   event.preventDefault()
    const serviceId = 'gmail'
    const userId = 'user_U39Lmydldgky3fIfHbXMJ'
	const templateId = 'template_oPvTVxAN';
	const variables = {name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.message}

	emailjs.send(serviceId, templateId, variables, userId)

	this.setState({ name: '', email: '', subject: '', message: '', buttonShow: false })
  }


  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var country = this.props.data.address.country;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }


    const buttonShow = this.state.buttonShow
    let button
    if (buttonShow) {
      button = <button className="submit">Submit</button>
    } else {
      button = <button className="submit" disabled="disabled" style={{ backgroundColor: 'transparent', color: '#ffffff', cursor: "default" }}>Thank you for your message</button>
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={this.handleSubmit}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue={this.state.name} size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email<span className="required">*</span></label>
						   <input type="text" defaultValue={this.state.email} size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue={this.state.subject} size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea value={this.state.message} onChange={this.handleChange} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                  {button}
                  </div>

					</fieldset>
				   </form>


           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {zip} {city}, {country}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest readings</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        He, Kaiming et al. “Mask R-CNN.” 2017 IEEE International Conference on Computer Vision (ICCV) (2017): 2980-2988.
                        <a href="https://arxiv.org/abs/1703.06870"> Available here</a>
                        </span>
                     </li>
                     <li>
                        <span>
                        Ma, Wan-Duo & Lewis, J. & Kleijn, W.. (2019). The HSIC Bottleneck: Deep Learning without Back-Propagation.
                        <a href="https://arxiv.org/abs/1908.01580"> Available here</a>
                        </span>
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
