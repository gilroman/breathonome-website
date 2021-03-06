// @flow
import React from 'react';
import glamorous from 'glamorous';
import Header from './Header';

const fontColor = '#635656';

const TermsPage = glamorous.div({});

const TermsContainer = glamorous.div({
  paddingLeft: '30vw',
  paddingRight: '30vw',
  backgroundColor: '#ffffff'
});

const TermsHeader = glamorous.h2({
  fontSize: 40,
  margin: 0,
  padding: 0,
  paddingTop: 20,
  fontFamily: 'Roboto, sans-serif',
  color: '#262626'
});

const TermsTextHeader = glamorous.h2({
  fontSize: 24,
  margin: 0,
  padding: 0,
  fontFamily: 'Roboto, sans-serif',
  color: '#262626'
});

const TermsText = glamorous.p({
  fontFamily: 'Roboto, sans-serif',
  fontSize: 16,
  lineHeight: '1.5',
  color: fontColor
});

const Terms = () => (
  <TermsPage>
    <Header />
    <TermsContainer>
      <TermsHeader>Terms of Use</TermsHeader>
      <TermsText>Last updated January 1, 2018</TermsText>
      <TermsText>
        All sections of these Terms of Use that, by their nature, should survive termination will survive
        termination,including, without limitation, the sections entitled User Content, Indemnity, Disclaimer of Warranty
        and Limitation of Liability, and General.
      </TermsText>
      <TermsTextHeader>Introduction</TermsTextHeader>
      <TermsText>
        {`The Breathonome.com website and mobile application is an online mechanism for tracking, and managing your
        breathing exercises. It is provided to you by AlwaysSound, LLC ("us" or "we" or "our" or “Breathonome" or
        “Breath~onome”), in connection with our partners, service providers, sponsors, or other affiliates. So that we
        may safely and responsibly manage this site for all of our users, your use of this site is subject to certain
        terms and conditions. The terms and conditions set forth below ("Terms of Use"), as well as the privacy policy
        set forth at www.breathonome.com/privacypolicy, apply to your use of the services and functionality provided on
        or through the Breathonome.com site and mobile application (the "Services"). By accessing and using the
        Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and the
        Privacy Policy. If you do not accept these Terms of Use and the Privacy Policy, you are not authorized to use
        the Services. We may modify these Terms of Use and the Privacy Policy at any time and such modification will be
        effective upon posting to the Services.`}
      </TermsText>
      <TermsTextHeader>No Medical Advice</TermsTextHeader>
      <TermsText>
        Breath~onome provides the Services for you to track, manage, and share your breathing exercises. THE SERVICES DO
        NOT CONTAIN OR CONSTITUTE, AND SHOULD NOT BE INTERPRETED AS, MEDICAL ADVICE OR OPINION. We are not licensed
        medical professionals, and we are not in the business of providing medical advice. You should always consult a
        qualified and licensed medical professional prior to beginning or modifying any diet or exercise program. YOUR
        USE OF THE WEBSITE OR THE MOBILE APPLICATION DOES NOT CREATE A DOCTOR-PATIENT RELATIONSHIP BETWEEN YOU AND
        Breath~onome.
      </TermsText>
      <TermsTextHeader>Use of the Services</TermsTextHeader>
      <TermsText>
        {`The Services allow for the delivery of software, text, graphics, images, video, audio, data and other material
        (collectively referred to as the "Content"). The Content may be owned by us or may be provided through an
        arrangement we have with others, including other users of the Services, or our partners, sponsors, or
        affiliates. The Content is protected by copyright under both United States and foreign laws. Unauthorized use of
        the Content may violate copyright, trademark, and other laws. You have no rights in or to the Content, and you
        may not use the Content except as permitted under these Terms of Use. No other use is permitted without prior
        written consent from us or the owner of the Content. You must retain all copyright and other proprietary notices
        contained in the original Content on any copy you make of the Content. You may not sell, transfer, assign,
        license, sublicense, or modify the Content or reproduce, display, publicly perform, make a derivative version
        of, distribute, or otherwise use the Content in any way for any public or commercial purpose, except to utilize
        features of the Services that, by their nature, involve publishing or sharing of Content with the public. If you
        violate any part of these Terms of Use, your permission to access and/or use the Content and Services
        automatically terminates and you must immediately destroy any copies you have made of the Content.`}
      </TermsText>
      <TermsText>
        {`Various company, product, and service names displayed on the Services may be trademarks or service marks owned
        by others (the "Third-Party Trademarks"). Your use of the Services should be construed as granting, by
        implication, estoppel, or otherwise, any license or right to use any Third-Party Trademark displayed on this
        Services. The Third-Party Trademarks may not be used to disparage any applicable third-party, any of their
        products or services, or in any manner in which, in our reasonable judgment, may damage any goodwill in the
        Third-Party Trademarks.`}
      </TermsText>
      <TermsText>
        {`The Services include access to links to, and content and data from, third-party websites ("External Services").
        These links, content, and data are provided solely as a convenience to you and not as an endorsement by us of
        the content on such External Services. The content of such External Services is developed and provided by
        others. In addition, the Services permit access to content posted, stored, or displayed at the direction of
        users of the Services, for which we cannot accept any responsibility or liability.`}
      </TermsText>
      <TermsText>
        The Services are for personal use only and may not be used in connection with any commercial endeavors except
        those that are specifically approved by us. The following activities are expressly prohibited: (i) collecting
        usernames and/or email addresses of other users by electronic or other means for the purpose of sending
        unsolicited email or other communications, (ii) any use of the Services, which in our sole judgment, degrades
        the reliability, speed, or operation of the Services or any underlying hardware or software thereof, (iii) use
        of web scraping, web harvesting, or web data extraction methods from Breath~onome even if the Breath~onome
        account owner gives permission; and (iv) any use of the Services which is unlawful or in violation of these
        Terms of Use.
      </TermsText>
      <TermsText>
        By using the Services, you represent and warrant that you are 13 years of age or older. Your account may be
        terminated without warning, if we believe that you are under 13 years of age. Your use of the Services is
        subject, in our sole discretion, to termination at any time.
      </TermsText>
      <TermsTextHeader>User Content</TermsTextHeader>
      <TermsText>
        {`The Services may now or in the future include functionality to permit the submission of Content at the direction
        of users of the Services ("User Content") and the hosting, sharing, and/or publishing of such User Content. You
        understand that whether or not such User Content is published, we do not guarantee any confidentiality with
        respect to any submissions. You shall be solely responsible for User Content you submit and the consequences of
        our posting or publishing such User Content. In connection with any User Content you submit, you affirm,
        represent, and/or warrant that: (i) you own or have the necessary licenses, rights, consents, and permissions to
        use and authorize us to use all patent, trademark, trade secret, copyright or other proprietary rights in and to
        any and all User Content to enable inclusion and use of the User Content in the manner contemplated by the
        Services and these Terms of Use; and (ii) you have the express consent, release, and/or permission of each and
        every identifiable individual person in the User Content to use the name or likeness of each and every such
        identifiable individual person to enable inclusion and use of the User Content in the manner contemplated by the
        Services and these Terms of Use. By submitting the User Content to us, you hereby grant us a perpetual,
        worldwide, non-exclusive, royalty-free, sublicensable and transferable license to use, reproduce, distribute,
        prepare derivative works of, modify, display, and perform all or any portion of the User Content in connection
        with our provision of the Services and our (and our successors') business, including without limitation for
        promoting and redistributing part or all of the Services (and derivative works thereof) in any media formats and
        through any media channels. You also hereby grant each user of the Services a non-exclusive license to access
        your User Content through the Services, if you have permitted such access through your account settings, and to
        use, reproduce, distribute, prepare derivative works of, display and perform such User Content as permitted
        through the functionality of the Services and under these Terms of Use. We may maintain copies of any User
        Content for purposes of backup, security, or maintenance, or as required by law.`}
      </TermsText>
      <TermsText>
        {`In connection with User Content, you further agree that you will not: (i) submit material that is copyrighted,
        protected by trade secret or otherwise subject to third party proprietary rights, including privacy and
        publicity rights, unless you are the owner of such rights or have permission from their rightful owner to post
        the material and to grant us all of the license rights granted herein; (ii) publish falsehoods or
        misrepresentations that could damage us or any third party; (iii) submit material that is unlawful, obscene,
        defamatory, libelous, threatening, pornographic, harassing, hateful, racially or ethnically offensive, or
        encourages conduct that would be considered a criminal offense, give rise to civil liability, violate any law,
        or is otherwise inappropriate; (iv) post advertisements or solicitations of business; or (v) impersonate another
        person. We do not endorse any User Content or any opinion, recommendation, or advice expressed therein, and we
        expressly disclaim any and all liability in connection with any User Content. We do not permit copyright
        infringing activities and infringement of intellectual property rights in connection with the Services, and we
        will remove all Content and User Content if properly notified that such Content or User Content infringes on
        another's intellectual property rights. We may remove any Content and User Content without prior notice. We may
        also terminate your access to the Services, if you are determined to be a repeat infringer. A repeat infringer
        is anyone who has been notified of infringing activity more than once and/or has had any User Content removed
        from the Services more than twice. We also reserve the right to decide whether Content or User Content is
        appropriate and complies with these Terms of Use for violations other than copyright infringement and violations
        of intellectual property law, such as, but not limited to, pornography, obscene or defamatory material, or
        excessive length. We may remove such User Content and/or terminate your access for uploading such material in
        violation of these Terms of Use at any time, without prior notice and at its sole discretion.`}
      </TermsText>
      <TermsText>
        {`If you are a copyright owner or an agent thereof and believe that any User Content or other Content infringes
        upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by
        providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further
        detail):`}
      </TermsText>
      <TermsText>
        {`(i) A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive
        right that is allegedly infringed;`}
      </TermsText>
      <TermsText>
        {`(ii) Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at
        a single online site are covered by a single notification, a representative list of such works at that site;`}
      </TermsText>
      <TermsText>
        (iii) Identification of the material that is claimed to be infringing or to be the subject of infringing
        activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to
        permit the service provider to locate the material;
      </TermsText>
      <TermsText>
        (iv) Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and,
        if available, an electronic mail address;
      </TermsText>
      <TermsText>
        (v) A statement that you have a good faith belief that use of the material in the manner complained of is not
        authorized by the copyright owner, its agent, or the law; and
      </TermsText>
      <TermsText>
        (vi) A statement that the information in the notification is accurate, and under penalty of perjury, that you
        are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
      </TermsText>
      <TermsText>
        Our designated Copyright Agent to receive notifications of claimed infringement and other notices relating to
        User Content and/or violation of these Terms of Use (e.g., violations of criminal laws) is: Gil Roman, c/o
        AlwaysSound, LLC / Email: listen@alwayssound.com. For clarity, only DMCA notices and notices relating to
        complaints in connection with User Content or violations of these Terms of Use should go to the Copyright Agent;
        any other feedback, comments, requests for technical support, and other communications should be addressed to
        our standard support contacts as identified on the Services.
      </TermsText>
      <TermsTextHeader>Indemnity</TermsTextHeader>
      <TermsText>
        You agree to defend, indemnify, and hold us harmless from and against any claims, actions or demands, including,
        without limitation, reasonable legal and accounting fees, arising or resulting from your breach of these Terms
        of Use or your uploading of, access to, or use or misuse of the Content or the Services. We shall provide notice
        to you of any such claim, suit, or proceeding and shall assist you, at your expense, in defending any such
        claim, suit or proceeding. We reserve the right to assume the exclusive defense and control of any matter which
        is subject to indemnification under this section. In such case, you agree to cooperate with any reasonable
        requests assisting our defense of such matter.
      </TermsText>
      <TermsTextHeader>Disclaimer of Warranty and Limitation of Liability</TermsTextHeader>
      <TermsText>
        WE, OUR AFFILIATES, OUR PARTNERS, AND OUR AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
        SUPPLIERS, OR LICENSORS, MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE CONTENT (INCLUDING THE USER CONTENT),
        INCLUDING BUT NOT LIMITED TO ITS ACCURACY, RELIABILITY, COMPLETENESS, TIMELINESS, OR RELIABILITY.
      </TermsText>
      <TermsText>
        NEITHER WE NOR OUR AFFILIATES OR PARTNERS SHALL BE SUBJECT TO LIABILITY FOR TRUTH, ACCURACY, OR COMPLETENESS OF
        ANY INFORMATION CONVEYED TO USERS OF THE SERVICES OR FOR ERRORS, MISTAKES OR OMISSIONS THEREIN OR FOR ANY DELAYS
        OR INTERRUPTIONS OF THE DATA OR INFORMATION STREAM FROM WHATEVER CAUSE. YOU AGREE THAT YOU USE THE SERVICES AND
        THE CONTENT AT YOUR OWN RISK.
      </TermsText>
      <TermsText>
        {` WE MAKE NO WARRANTY THAT THE SERVICES WILL BE AVAILABLE ERROR FREE OR THAT THE SERVICES OR THE CONTENT ARE FREE OF COMPUTER VIRUSES OR SIMILAR CONTAMINATION OR DESTRUCTIVE FEATURES. IF YOUR USE OF THE SERVICES OR THE CONTENT RESULTS IN THE NEED FOR SERVICING OR REPLACING EQUIPMENT OR DATA, WE SHALL NOT BE RESPONSIBLE FOR THOSE COSTS. THE SERVICES AND CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND. WE HEREBY DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE WARRANTY OF TITLE, MERCHANTABILITY, NON INFRINGEMENT OF THIRD PARTIES' RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE.`}
      </TermsText>
      <TermsText>
        IN NO EVENT SHALL WE BE LIABLE FOR ANY DAMAGES (INCLUDING, WITHOUT LIMITATION, INCIDENTAL AND CONSEQUENTIAL
        DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION) RESULTING FROM THE USE OR
        INABILITY TO USE THE SERVICES AND THE CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE),
        OR ANY OTHER LEGAL THEORY, IN EXCESS OF ONE HUNDRED DOLLARS, EVEN IF A WE HAVE BEEN ADVISED OF THE POSSIBILITY
        OF SUCH DAMAGES. Some states do not allow exclusion of implied warranties or limitation of liability for
        incidental or consequential damages, so the above limitations or exclusions may not apply to you. IN SUCH
        STATES, OUR LIABILITY SHALL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.
      </TermsText>
      <TermsTextHeader>General</TermsTextHeader>
      <TermsText>
        These Terms of Use, and any rights and licenses granted hereunder, may not be transferred or assigned by you,
        but may be assigned by us without restriction. These Terms of Use are governed by the internal substantive laws
        of the Commonwealth of California, without respect to its conflict of law provisions. You expressly agree to
        submit to the exclusive personal jurisdiction of the state and federal courts sitting in the City of Los Angeles
        in the Commonwealth of California. If any provision of these Terms of Use is found to be invalid by any court
        having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining
        provisions of the Terms of Use, which shall remain in full force and effect. Failure by us to act on or enforce
        any provision of the Terms of Use shall not be construed as a waiver of that provision or any other provision in
        these Terms of Use. No waiver shall be effective against us unless made in writing, and no such waiver shall be
        construed as a waiver in any other or subsequent instance. Except as expressly agreed by us and you, these Terms
        of Use constitute the entire agreement between you and us with respect to the subject matter, and supersede all
        previous or contemporaneous agreements, whether written or oral, between the parties with respect to the subject
        matter. The section headings are provided merely for convenience and shall not be given any legal import. These
        Terms of Use will inure to the benefit of our successors, assigns, licensees, and sublicensees.
      </TermsText>
    </TermsContainer>
  </TermsPage>
);

export default Terms;
