
import Footer from 'components/Footer';
import Header from 'components/Header';
// import { ProductCard, ProductQuery } from 'components/products';
import { Fragment } from 'react';


const Privacy = () => {
	

	return (
		<Fragment>
			<Header />
			    <div className='container mt-4 mb-4'>
                <div className='head p-4 ' style={{fontWeight:"bolder"}}>
                PRIVACY POLICY
                </div>
                <p className='p-4'>We protect your privacy.</p>
                <p className='p-4'>Our privacy policy is simple: any information you give us stays with us. We do not rent, sell, lend, or otherwise distribute your personal information to anyone for any reason. This includes your contact information, as well as specific order information.</p>
                <p className='p-4'>We limit data access to those who need to know.</p>
                <p className='p-4'>Within our organization, your personal data is accessible to only a limited number of employees with special access privileges. Although we may, from time to time, compile general demographic information based on your order, this information is shared within our organization only and has no identifiable personal data associated with it.</p>
                <p className='p-4'>Information Collected</p>
                <p className='p-4'>To enable you to place an order on our site, we need to have the following basic information about you: Your First Name, Your Last Name, and Your Address, City, Zip code, State, Country, Phone Number and Contact E-mail address.</p>
                <p className='p-4'>Apart from this, our systems gather certain details about your computer's internet connection like your IP address when you visit our site. Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, to customize our site as per your interest, to calculate the number of visitors on our site and to know the geographic locations from where our visitors come.</p>
                <p className='p-4'>We do not allow any unauthorized person or organization be it other members, visitors, and anyone not in our organization to use any information collected from you.</p>
                <p className='p-4'>Information Modification</p>
                <p className='p-4'>You can modify your personal details by accessing Edit Profile option anytime from our site.</p>
                <p className='p-4'>Information Sharing</p>
                <p className='p-4'>Probably this is the most important question in your mind as to with whom do we share your information? The answer to this question is that we do not rent, sell, barter, or give away your information to anyone. To some extent, information has to be passed on to the courier companies, credit card processing companies, vendors, etc. to enable them to perform their functions related to your order fulfilment. Apart from this normal business requirement, information may also be needed to be shared with law authorities, for fraud detection, and for the safety of our site, employees, management, users, members and other affiliates associated with us.</p>
                <p className='p-4'>Information Usage</p>
                <p className='p-4'>The most important usage of the information collected from you is your email which is used to inform you that your order has been confirmed/executed. Your email is also used to inform you for your customer service related queries and for any newsletters sent. All other information collected is confidentially stored and will not be disclosed unless needed as per the requirement of the law authorities or in case of any disputes.</p>
                
                
                
          </div>
			<Footer />
		</Fragment>
	)
}

export default Privacy;