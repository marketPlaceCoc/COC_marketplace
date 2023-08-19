import React,{useState} from 'react'



const QnA = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="qna-item">
          <div className="qna-question" onClick={() => toggleAnswer(index)}>
            {item.question}
          </div>
          <div
            className={`qna-answer ${expandedIndex === index ? 'expanded' : ''}`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

const data1 = [
  {
    question: 'How will I receive my coc account?',
    answer: 'After successful payment you will receive Gmail login information like Password and backup codes, into your inbox automatically. You can log in to the Gmail with the provided information, and enjoy your new Clash of Clans account.',
  },
  {
    question: 'When will I receive my clash of clans account?',
    answer: 'Your account will be delivered instantly to your email that you provided on the checkout page.',
  },
  {
    question: 'The payment was successful but still there is not any Email from you what should I do?',
    answer: 'Please make sure check your Spam folder and Promotion folder too. After checking these two folders, if still there is not any email from us, just contact us with live-support or Instagram. Our customer services will send Gmail login information to you in live-chat or on Instagram',
  },
  {
    question: 'How will I receive Gold Pass or Gems?',
    answer: 'After you buy Gems or a Gold Pass, contact us with our live support or our social apps we will ask your Supercell email and will buy you Gold Pass and Gems.',
  },
  {
    question: 'When will I receive my Gold Pass or Gems?',
    answer: 'We will deliver your Gems and Gold Pass in 1-3 hours after you placed an order.',
  },
]
const data2 = [
  {
    question: 'Can I get a discount?',
    answer: 'Of course! Feel free to ask for discount codes for your first account in the live chat ',
  },
  {
    question: 'Which Payments do you accept?',
    answer: 'At this time, we accept Credit Cards and Cryptocurrencies from customers all over the world except American customers. Unfortunately for American customers only payment with Cryptocurrency is available. If you have any question about paying with Cryptocurrency, feel free to ask from the customer services in live-chat they are ready to help you from first to end.',
  },
  {
    question: 'How can I buy?',
    answer: 'We explained the buying process in simple steps, please take a look at How to buy',
  },
]
const data3 = [
  {
    question: 'Is warranty included with the Clash of Clans account?',
    answer: 'Yes, we provide lifetime replacement warranty with each Clash of Clans account. If you have any issues with your purchased account just simply let us know via  Live Chat. Lifetime Warranty will not be included if you contacted Supercell, as they might block you for not being the first owner.',
  },
  {
    question: 'I bought a clash of clans account few days ago but I don\'t like the account anymore, can I get a refund on that?',
    answer: 'No sorry we only refund if the account has any problem.',
  },
]

export default function Faq() {
  
  return (
    <div id='Faq_pg'>
      <h1 className='t1'>FREQUENTLY ASKED QUESTIONS</h1>
        <h1 className="titles">Delivery</h1>
      <QnA data={data1}/>
        <h1 className="titles">Payment</h1>
      <QnA data={data2}/>
        <h1 className="titles">Refund & Warrenty</h1>
      <QnA data={data3}/>
    </div>
  )
}
