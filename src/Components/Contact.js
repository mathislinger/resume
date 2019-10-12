import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';


class Contact extends Component {

  constructor(props) {
	super(props);
	this.state = { name: '', email: '', subject: '', message: '', buttonShow: true };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleSend = this.handleSend.bind(this);
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
  }

   handleSend() {
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
      button = <button className="submit" onClick={this.handleSend}>Submit</button>
    } else {
      button = <button className="submit" disabled="disabled" style={{ backgroundColor: 'transparent', color: '#ffffff', cursor: "default" }}>Thank you for your message</button>
      //<h4 style={{marginLeft: '170px'}}>Thank you for your message</h4>;
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
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoezaretzrezshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
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
