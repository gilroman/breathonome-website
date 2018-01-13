import React from 'react';
import glamorous from 'glamorous';
import Header from './Header';

const fontColor = '#635656';

const PrivacyPage = glamorous.div({});

const PolicyContainer = glamorous.div({
  paddingLeft: '30vw',
  paddingRight: '30vw',
  backgroundColor: '#ffffff'
});

const PolicyHeader = glamorous.h2({
  fontSize: 40,
  margin: 0,
  padding: 0,
  paddingTop: 20,
  fontFamily: 'Roboto, sans-serif',
  color: '#262626'
});

const PolicyTextHeader = glamorous.h2({
  fontSize: 24,
  margin: 0,
  padding: 0,
  fontFamily: 'Roboto, sans-serif',
  color: '#262626'
});

const PolicyText = glamorous.p({
  fontFamily: 'Roboto, sans-serif',
  fontSize: 16,
  lineHeight: '1.5',
  color: fontColor
});

const PrivacyPolicy = () => (
  <PrivacyPage>
    <Header />
    <PolicyContainer>
      <PolicyHeader>Privacy Policy</PolicyHeader>
      <PolicyText>
        Your personal data and your privacy are important to us. We created this document to describe how Breath~onome
        handles your personal data in a way that we hope is easy to understand.
      </PolicyText>
      <PolicyTextHeader>1. How do we use your data?</PolicyTextHeader>
      <PolicyText>1.1 We collect data with the goal to provide you with a great service.</PolicyText>
      <PolicyText>
        1.2 When you create an account with us, we collect the “Personal data” you give us. “Personal data” includes any
        information that directly or indirectly identifies you. This includes things like your name, address, telephone
        number, or email address.
      </PolicyText>
      <PolicyText>
        1.3 “Non-personal data” is information that cannot be connected to your identity, e.g. the number of users
        visiting our services or any other kind of aggregated information.
      </PolicyText>
      <PolicyTextHeader>2. Personal data we collect.</PolicyTextHeader>
      <PolicyText>
        2.1 If you use the Breath~onome app without creating an account, your breathing exercise data is only stored on
        your device and Breath~onome does not have any access to it. In this instance, Breath~onome only receives usage
        data provided by your device while you are using Breath~onome, such as your IP address, mobile operating system
        (e.g. Android or iOS), device type and model, or network provider. This helps to identify app malfunctions and
        helps us further improve the Breath~onome app.
      </PolicyText>
      <PolicyText>
        2.2 If you create an account on the Breath~onome app then we will collect and store the following data,
        providing you have entered it into Breath~onome:
      </PolicyText>
      <PolicyText>
        • Profile data including your name, age and email address. You can skip some of this information during
        Breath~onome’s setup, so you may have chosen not to provide this.
      </PolicyText>
      <PolicyText>
        • Your settings data which allows Breath~onome to remember any customizations you have made (i.e. custom
        breathing exercises, sound preferences etc.).
      </PolicyText>
      <PolicyText>
        • Your breathing exercises tracking data which includes the data about exercise routines you log in to
        Breath~onome.
      </PolicyText>
      <PolicyText>
        By creating an account with Breath~onome you agree that: Breath~onome may store and process personal data you
        share with Breath~onome in order to provide the Breath~onome service to you. Breath~onome may also store and
        process this data to improve the services Breath~onome is able to offer. These services include sending you
        information and reminders featuring personal data through the app or to the email address you shared with
        Breath~onome. Breath~onome does not share your personal data with third party service providers except as
        required to provide the Breath~onome features you use.
      </PolicyText>
      <PolicyText>
        2.3 If you recognize a problem with our service and submit a request to our support team or through any other
        means of communication with Breath~onome, we store the communication history as well as the information
        submitted by you in the course of the communication (e.g. your email address). We do this in order to respond to
        inquiries and provide support.
      </PolicyText>
      <PolicyText>
        2.4 When using our website, our web server will collect information such as: • Your IP address • The website
        from which you were referred to our website (e.g. if you followed a link) • The webpages you are visiting on our
        website • The browser you are using and its display settings • Your operating system • The date and duration of
        your visit • Further personal data will only be stored and processed if you voluntarily share it with us, e.g.
        through a contact form Breath~onome analyzes website usage data to optimize the site’s content and functionality
        and to identify technical issues.
      </PolicyText>
      <PolicyTextHeader>3. Data Security</PolicyTextHeader>
      <PolicyText>
        We apply security measures to protect against the misuse, loss and alteration of personal information under our
        control and follow industry best practices, using open and known principles when transferring and storing your
        data. Though we cannot ensure or guarantee that misuse, loss or alteration of information will never occur, we
        use all reasonable efforts to prevent it.
      </PolicyText>
      <PolicyText>
        3.1 How Breath~onome stores your personal data If you have an account with Breath~onome, your personal profile
        data, settings and breathing tracking are stored in Google’s Firebase service.
      </PolicyText>
      <PolicyTextHeader>4. Third party applications</PolicyTextHeader>
      <PolicyText>
        4.1 Google Analytics Our website uses Google Analytics, a web analysis service operated by Google Inc.
        (“Google”). Google Analytics uses cookies (text files) which are stored on your computer and allow for analysis
        of your visit to the site. Information produced via cookies will be transferred to and stored on a server in the
        USA operated by Google. To avoid your personal data being collected through IP addresses, we use Google
        Analytics add-on “_anonymizeIp()”. As a result, a shortened (or anonymous) IP address is sent to Google. Google
        analyzes this information to offer reports for Breath~onome on website usage and online usage of associated
        services. Google may also transfer this information to third parties either where this is required by law or
        where third parties are contracted by Google to process data. Google will not allow your IP address to be linked
        to any other personal data. You can prevent cookies from being installed on your computer by changing your
        browser settings; however, if you choose to do this, your visit to our website and use of some features may not
        work. By using Breath~onome’s website, you have consented to have non-personal data used and processed by Google
        as described above. You can withdraw consent for your data to be collected and processed at any time, but this
        withdrawal only applies to future activities.
      </PolicyText>
      <PolicyText>
        4.2 Segment Breath~onome uses a data analysis service operated by Segment. Segment uses device identifiers that
        are stored on your mobile device and allow for analysis of your use of the Breath~onome app. For website
        analysis, Segment uses ‘cookies’ (small text files) that are stored on your computer and allow for analysis of
        your visit to our website. Data concerning your use will be transferred to and stored on a server in the USA
        operated by Segment. You can prevent cookies from being installed on your computer by changing your browser
        settings; however, if you choose to do this, your visit to our website and use of some functionalities of our
        service may be impaired. By using our Service, you are deemed to have expressly consented to the use and
        processing of your data collected by Segment as described above. You can read more about Segment’s privacy
        policy here: https://segment.com/docs/legal/privacy/
      </PolicyText>
      <PolicyText>
        4.3 Facebook Lookalike Audience If you have communicated to Facebook that you are using the Breath~onome app,
        Breath~onome may use this information via a Facebook advertising service called “lookalike audiences” to
        identify potential new Breath~onome users based on the Facebook characteristics of certain existing Breath~onome
        users (e.g. what they liked on Facebook.) We use this service so we can reach more people who have similar
        attributes or behavior of our users. For this purpose we may share your email address with Facebook if you log
        in to Breath~onome using your Facebook account or downloaded Breath~onome via a Facebook ad. In other words, if
        you never told Facebook you use Breath~onome, we will not share that information. Additionally, Breath~onome
        does not in any way share data you are tracking in the app or any other personal information with Facebook. You
        can read more about Facebook lookalike audiences here: https://www.facebook.com/business/help/164749007013531
      </PolicyText>
      <PolicyTextHeader>5. Cookies</PolicyTextHeader>
      <PolicyText>
        Our website uses cookies – small text files that help the site provide a better user experience. In general,
        cookies are used to retain user preferences, store information for things like shopping carts and provide
        anonymized tracking data to third party applications like Google Analytics. As a rule, cookies will make your
        browsing experience better. You may, however, disable cookies on Breath~onome’s site. The most effective way to
        do this is to disable cookies in your browser. We suggest consulting the help section of your browser or taking
        a look at a website about cookies which offers guidance for your browser or device.
      </PolicyText>
      <PolicyTextHeader>6. Communications and newsletter activities</PolicyTextHeader>
      <PolicyText>
        Breath~onome uses your personal information, such as your email address, to contact you with messages, emails,
        and newsletters. These include push notifications and in-app messages, as well as occasional promotional
        material that may be of interest to you, also via email. Such newsletter services are only provided to you if
        you have signed up for the newsletter service or given your consent for these notifications. You can withdraw
        your consent at any time by unsubscribing from our newsletter. For providing such services, Breath~onome may
        forward information such as your email address to third-party providers in order to carry out such newsletter
        service or notification. These providers are the Rocket Science Group LLC (“Mailchimp”), seated in Atlanta, USA,
        which may process your email address, names and usage data to send you informational and occasional commercial
        content via email; The privacy policy of Mailchimp’s services can be found on their respective website.
        Mailchimp is compliant with the EU-U.S. Privacy Shield Framework that ensures that European data privacy
        requirement are met. You can find more information about the Privacy Shield Framework here:
        https://www.privacyshield.gov/welcome
      </PolicyText>
      <PolicyTextHeader>7. COPPA</PolicyTextHeader>
      <PolicyText>
        Breath~onome does not knowingly collect or use personal data from children under the age of 13. By registering
        to a Breath~onome account you are required to confirm that you are at least 13 years old. If Breath~onome gains
        actual knowledge that the information has been collected from children under the age of thirteen in the United
        States in contradiction with the Children’s Online Privacy Protection Act of 1998 and the regulation thereunder,
        Breath~onome will not disclose this data and reserves the right to immediately delete the account. For all
        COPPA-related questions, please contact us at listen@alwayssound.com.
      </PolicyText>
      <PolicyTextHeader>8. Changes to this Privacy Policy</PolicyTextHeader>
      <PolicyText>
        Breath~onome reserves the right to amend this Privacy Policy from time to time to reflect changes in the law,
        our data collection and data use practices, the features of Breath~onome’s services or advances in technology.
        Please check this page periodically for changes. If we make a change to this Privacy Policy that, in our sole
        discretion, is material, we will notify you by posting notice of these changes in this Privacy Policy.
        Breath~onome is a company operated by AlwaysSound LLC, a California Limited Liability Company, located in Los
        Angeles.
      </PolicyText>
    </PolicyContainer>
  </PrivacyPage>
);

export default PrivacyPolicy;
