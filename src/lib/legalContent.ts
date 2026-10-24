export interface LegalArticle {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  subtitle: string;
  lastUpdated: string;
  badge: string;
  articles: LegalArticle[];
}

export interface LegalContent {
  terms: LegalDocument;
  privacy: LegalDocument;
}

export const legalContent: Record<'el' | 'en', LegalContent> = {
  el: {
    terms: {
      title: "Όροι Χρήσης",
      subtitle: "Κανονισμός λειτουργίας, δικαιώματα και υποχρεώσεις κατά τη χρήση των υπηρεσιών και του ιστοτόπου της ZILOLEX.",
      lastUpdated: "Οκτώβριος 2026",
      badge: "Ν. 5038/2023 & GDPR",
      articles: [
        {
          id: "intro",
          number: "01",
          title: "Εισαγωγή & Ταυτότητα Εταιρείας",
          paragraphs: [
            "Καλωσορίσατε στον ιστότοπο της ZILOLEX (εφεξής «Εταιρεία», «εμείς» ή «μας»). Η πρόσβαση, περιήγηση και χρήση του ιστοτόπου zilolex.gr υπόκειται στους παρόντες Όρους Χρήσης, την Πολιτική Απορρήτου και την εκάστοτε ισχύουσα ελληνική και ευρωπαϊκή νομοθεσία.",
            "Με την επίσκεψη ή χρήση οποιασδήποτε λειτουργίας του ιστοτόπου, δηλώνετε ότι έχετε αναγνώσει, κατανοήσει και αποδέχεστε πλήρως και ανεπιφύλακτα τους παρόντες όρους. Σε περίπτωση που διαφωνείτε με οποιονδήποτε από τους όρους, παρακαλείστε να διακόψετε άμεσα την περιήγησή σας.",
          ],
        },
        {
          id: "services",
          number: "02",
          title: "Αντικείμενο & Υπηρεσίες της ZILOLEX",
          paragraphs: [
            "Η ZILOLEX παρέχει εξειδικευμένες συμβουλευτικές και διαμεσολαβητικές υπηρεσίες νόμιμης μετάκλησης εργατικού δυναμικού από τρίτες χώρες προς επιχειρήσεις που δραστηριοποιούνται στην ελληνική επικράτεια.",
            "Οι υπηρεσίες καλύπτουν καίριους κλάδους της οικονομίας, όπως ο Τουρισμός & Φιλοξενία, ο Αγροτικός Τομέας & Κτηνοτροφία, οι Κατασκευές & Τεχνικά Έργα, η Βιομηχανία & Μεταποίηση, καθώς και τα Logistics & Αποθήκες.",
            "Οι πληροφορίες που παρέχονται στον παρόντα ιστότοπο έχουν ενημερωτικό χαρακτήρα. Η έναρξη οποιασδήποτε επαγγελματικής συνεργασίας και η ανάληψη διαδικασιών μετάκλησης επισημοποιείται με ρητή, έγγραφη σύμβαση παροχής υπηρεσιών μεταξύ της ZILOLEX και της ενδιαφερόμενης επιχείρησης.",
          ],
        },
        {
          id: "compliance",
          number: "03",
          title: "Νομική Συμμόρφωση & Κώδικας Μετανάστευσης (Ν. 5038/2023)",
          paragraphs: [
            "Όλες οι διαδικασίες διενεργούνται σε αυστηρή συμμόρφωση με τον Νόμο 5038/2023 (Νέος Κώδικας Μετανάστευσης), τις εγκυκλίους του Υπουργείου Μετανάστευσης & Ασύλου, τις αρμόδιες Αποκεντρωμένες Διοικήσεις και τις διμερείς διακρατικές συμφωνίες της Ελλάδας.",
            "Η ZILOLEX εφαρμόζει πολιτική απόλυτης μηδενικής ανοχής σε φαινόμενα παράνομης διακίνησης, καταναγκαστικής εργασίας, αδήλωτης εργασίας ή εκμετάλλευσης. Διασφαλίζουμε ότι όλοι οι υποψήφιοι εργαζόμενοι διαθέτουν νόμιμες συμβάσεις εργασίας, πλήρη ασφαλιστική κάλυψη, αξιοπρεπείς συνθήκες διαβίωσης και ισότιμη αμοιβή βάσει της ελληνικής εργατικής νομοθεσίας.",
          ],
        },
        {
          id: "contact-form",
          number: "04",
          title: "Χρήση Φόρμας Επικοινωνίας & Αιτήματος Προσωπικού",
          paragraphs: [
            "Κατά την υποβολή της ηλεκτρονικής φόρμας αιτήματος προσωπικού, ο χρήστης δεσμεύεται ότι τα παρεχόμενα στοιχεία (ονοματεπώνυμο, επωνυμία επιχείρησης, email, τηλέφωνο, ανάγκες προσωπικού) είναι αληθή, ακριβή, πλήρη και επικαιροποιημένα.",
            "Απαγορεύεται αυστηρά η χρήση της φόρμας για αποστολή ανεπιθύμητης αλληλογραφίας (spam), διαφημιστικού υλικού, προσβλητικών ή παράνομων μηνυμάτων, καθώς και η υποβολή στοιχείων τρίτων φυσικών ή νομικών προσώπων χωρίς τη ρητή τους εξουσιοδότηση.",
          ],
        },
        {
          id: "ip",
          number: "05",
          title: "Δικαιώματα Πνευματικής & Βιομηχανικής Ιδιοκτησίας",
          paragraphs: [
            "Το σύνολο του περιεχομένου του ιστοτόπου, συμπεριλαμβανομένων ενδεικτικά των εμπορικών σημάτων, λογοτύπων, κειμένων, γραφικών, διακριτικών γνωρισμάτων, εικόνων και πηγαίου κώδικα, αποτελεί πνευματική ιδιοκτησία της ZILOLEX και προστατεύεται από τις διατάξεις του εθνικού, ενωσιακού και διεθνούς δικαίου.",
            "Απαγορεύεται ρητά οποιαδήποτε αντιγραφή, αναπαραγωγή, αναδημοσίευση, τροποποίηση, πώληση ή διανομή του περιεχομένου χωρίς την προηγούμενη έγγραφη συναίνεση της ZILOLEX.",
          ],
        },
        {
          id: "privacy",
          number: "06",
          title: "Προστασία Προσωπικών Δεδομένων & Cookies (GDPR)",
          paragraphs: [
            "Η προστασία των προσωπικών σας δεδομένων αποτελεί ύψιστη προτεραιότητα για τη ZILOLEX. Η συλλογή και επεξεργασία δεδομένων μέσω του ιστοτόπου συμμορφώνεται πλήρως με τον Γενικό Κανονισμό Προστασίας Δεδομένων (ΕΕ 2016/679 - GDPR) και τον Ν. 4624/2019.",
            "Για περισσότερες πληροφορίες σχετικά με τα δεδομένα που συλλέγουμε, τον σκοπό επεξεργασίας και τα δικαιώματά σας, ανατρέξτε στην ενότητα Πολιτική Απορρήτου και στο παράθυρο διαχείρισης cookies.",
          ],
        },
        {
          id: "liability",
          number: "07",
          title: "Περιορισμός Ευθύνης",
          paragraphs: [
            "Η ZILOLEX καταβάλλει κάθε δυνατή προσπάθεια για την ορθή λειτουργία του ιστοτόπου και την ακρίβεια του περιεχομένου του. Ωστόσο, οι διαδικασίες έκδοσης θεωρήσεων εισόδου (Visa D), εγκρίσεων μετάκλησης και αδειών διαμονής εξαρτώνται από δημόσιες υπηρεσίες, προξενεία και αρμόδια υπουργεία.",
            "Η Εταιρεία δεν φέρει ευθύνη για καθυστερήσεις, απορρίψεις ή έκτακτες αλλαγές νομοθετικών ρυθμίσεων που εκφεύγουν της σφαίρας ελέγχου της, ούτε για τυχόν προσωρινές τεχνικές διακοπές λειτουργίας του ιστοτόπου.",
          ],
        },
        {
          id: "third-party",
          number: "08",
          title: "Σύνδεσμοι προς Τρίτους",
          paragraphs: [
            "Ο ιστότοπος μπορεί να περιλαμβάνει παραπομπές ή συνδέσμους (links) προς επίσημες κρατικές πύλες (όπως gov.gr, migration.gov.gr). Η ZILOLEX δεν ασκεί έλεγχο και δεν φέρει ουδεμία ευθύνη για τη διαθεσιμότητα, την πολιτική απορρήτου ή το περιεχόμενο εξωτερικών ιστοτόπων.",
          ],
        },
        {
          id: "modifications",
          number: "09",
          title: "Τροποποιήσεις των Όρων",
          paragraphs: [
            "Η ZILOLEX διατηρεί το δικαίωμα να επικαιροποιεί ή να τροποποιεί τους παρόντες Όρους Χρήσης οποτεδήποτε κριθεί απαραίτητο, αναρτώντας την ανανεωμένη έκδοση στον ιστότοπο. Η συνέχιση της χρήσης του ιστοτόπου μετά τη δημοσίευση τροποποιήσεων συνεπάγεται την αποδοχή τους.",
          ],
        },
        {
          id: "jurisdiction",
          number: "10",
          title: "Εφαρμοστέο Δίκαιο & Δικαιοδοσία",
          paragraphs: [
            "Οι παρόντες Όροι Χρήσης διέπονται και ερμηνεύονται σύμφωνα με το Ελληνικό Δίκαιο. Για οποιαδήποτε διαφορά προκύψει σχετικά με τη χρήση του ιστοτόπου ή την εφαρμογή των παρόντων όρων, αποκλειστικά αρμόδια ορίζονται τα δικαστήρια της πόλης των Αθηνών.",
          ],
        },
        {
          id: "contact",
          number: "11",
          title: "Στοιχεία Επικοινωνίας",
          paragraphs: [
            "Για οποιαδήποτε ερώτηση, διευκρίνιση ή αίτημα σχετικά με τους παρόντες Όρους Χρήσης, μπορείτε να επικοινωνήσετε μαζί μας μέσω ηλεκτρονικού ταχυδρομείου στο info@ZILOLEX.gr ή τηλεφωνικά στο +30 210 0000000.",
          ],
        },
      ],
    },
    privacy: {
      title: "Πολιτική Απορρήτου",
      subtitle: "Πώς συλλέγουμε, χρησιμοποιούμε, προστατεύουμε και διαχειριζόμαστε τα προσωπικά σας δεδομένα βάσει του Γενικού Κανονισμού GDPR.",
      lastUpdated: "Οκτώβριος 2026",
      badge: "GDPR (ΕΕ 2016/679)",
      articles: [
        {
          id: "controller",
          number: "01",
          title: "Υπεύθυνος Επεξεργασίας",
          paragraphs: [
            "Υπεύθυνος Επεξεργασίας των προσωπικών σας δεδομένων είναι η ZILOLEX («Εταιρεία»), με έδρα στην Αθήνα, Ελλάδα. Στοιχεία επικοινωνίας: info@ZILOLEX.gr, Τηλέφωνο: +30 210 0000000.",
            "Δεσμευόμαστε να προστατεύουμε την ιδιωτικότητά σας και να επεξεργαζόμαστε τα δεδομένα σας με απόλυτη διαφάνεια, νομιμότητα και ασφάλεια.",
          ],
        },
        {
          id: "data-collected",
          number: "02",
          title: "Δεδομένα που Συλλέγουμε",
          paragraphs: [
            "Στοιχεία Επικοινωνίας Επιχειρήσεων: Ονοματεπώνυμο υπευθύνου, εταιρική επωνυμία, διεύθυνση ηλεκτρονικού ταχυδρομείου, αριθμός τηλεφώνου και επιχειρηματικές ανάγκες μετάκλησης προσωπικού.",
            "Τεχνικά Δεδομένα: Διεύθυνση IP, τύπος προγράμματος περιήγησης, ρυθμίσεις γλώσσας και δεδομένα επισκεψιμότητας μέσω cookies (εφόσον έχετε δώσει τη σχετική συγκατάθεση).",
          ],
        },
        {
          id: "purpose",
          number: "03",
          title: "Σκοπός & Νομική Βάση Επεξεργασίας",
          paragraphs: [
            "Εξυπηρέτηση αιτημάτων εργοδοτών και παροχή εξατομικευμένης προσφοράς στελέχωσης (προσυμβατικό/συμβατικό στάδιο).",
            "Συμμόρφωση με έννομες υποχρεώσεις σύμφωνα με τον Κώδικα Μετανάστευσης (Ν. 5038/2023).",
            "Έννομο συμφέρον της Εταιρείας για τη διασφάλιση της κυβερνοασφάλειας και τη βελτίωση της εμπειρίας περιήγησης.",
          ],
        },
        {
          id: "rights",
          number: "04",
          title: "Τα Δικαιώματά σας βάσει GDPR",
          paragraphs: [
            "Δικαίωμα πρόσβασης στα δεδομένα σας, δικαίωμα διόρθωσης ανακριβών στοιχείων, δικαίωμα διαγραφής («δικαίωμα στη λήθη»), δικαίωμα περιορισμού της επεξεργασίας, δικαίωμα φορητότητας δεδομένων και δικαίωμα εναντίωσης.",
            "Μπορείτε να ασκήσετε τα δικαιώματά σας οποτεδήποτε αποστέλλοντας αίτημα στο info@ZILOLEX.gr. Έχετε επίσης το δικαίωμα υποβολής καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (dpa.gr).",
          ],
        },
      ],
    },
  },
  en: {
    terms: {
      title: "Terms of Use",
      subtitle: "Operating regulations, rights, and obligations governing the use of ZILOLEX platform and staffing services.",
      lastUpdated: "October 2026",
      badge: "Law 5038/2023 & GDPR",
      articles: [
        {
          id: "intro",
          number: "01",
          title: "Introduction & Corporate Identity",
          paragraphs: [
            "Welcome to the website of ZILOLEX (hereinafter 'Company', 'we', or 'our'). Access to and use of the zilolex.gr platform is governed by these Terms of Use, our Privacy Policy, and applicable Greek and European Union legislation.",
            "By browsing or utilizing any feature of this website, you confirm that you have read, understood, and agreed to all terms unconditionally. If you disagree with any part of these terms, please discontinue browsing immediately.",
          ],
        },
        {
          id: "services",
          number: "02",
          title: "Scope & Services of ZILOLEX",
          paragraphs: [
            "ZILOLEX specializes in comprehensive advisory and recruitment agency solutions for legal third-country workforce staffing tailored to enterprises operating in Greece.",
            "Our services span vital economic sectors including Tourism & Hospitality, Agriculture & Livestock, Construction & Technical Projects, Manufacturing & Industrial Processing, and Logistics & Warehousing.",
            "Information displayed on this website is of an informative nature. Official engagements for workforce recruitment procedures are solidified via formal written service agreements between ZILOLEX and the client entity.",
          ],
        },
        {
          id: "compliance",
          number: "03",
          title: "Legal Compliance & Migration Code (Law 5038/2023)",
          paragraphs: [
            "All procedures are executed in strict alignment with Greek Law 5038/2023 (Migration Code), Ministerial circulars, Decentralized Administrations, and Greece's bilateral international agreements.",
            "ZILOLEX maintains an absolute zero-tolerance policy against human trafficking, forced labor, or exploitation. We ensure all workers hold valid employment contracts, social security registrations, dignified accommodations, and wage parity under Greek labor standards.",
          ],
        },
        {
          id: "contact-form",
          number: "04",
          title: "Use of Request & Contact Forms",
          paragraphs: [
            "When submitting an online workforce inquiry form, users commit that all supplied credentials (full name, corporate name, email, telephone, headcount requirements) are genuine, accurate, and current.",
            "Using contact forms for spam, malicious code distribution, abusive material, or unauthorized submission of third-party identities is strictly prohibited.",
          ],
        },
        {
          id: "ip",
          number: "05",
          title: "Intellectual Property Rights",
          paragraphs: [
            "All website materials, including trademarks, brand assets, texts, graphical elements, layout designs, and source code, represent exclusive intellectual property of ZILOLEX and are safeguarded under national, EU, and international IP laws.",
            "Copying, reproduction, republication, modification, or commercial exploitation of any part of this website without prior written authorization from ZILOLEX is prohibited.",
          ],
        },
        {
          id: "privacy",
          number: "06",
          title: "Data Protection & Cookies (GDPR)",
          paragraphs: [
            "Protection of corporate and personal information is of paramount importance to ZILOLEX. All processing practices adhere strictly to General Data Protection Regulation (EU 2016/679 - GDPR) and Law 4624/2019.",
            "For full transparency regarding data categories, processing grounds, and your individual rights, refer to our Privacy Policy and Cookie Preferences modal.",
          ],
        },
        {
          id: "liability",
          number: "07",
          title: "Limitation of Liability",
          paragraphs: [
            "ZILOLEX exercises diligent efforts to maintain high platform availability and informational accuracy. However, visa approvals, consular interviews, and entry quota clearances remain under the sovereign discretion of Greek authorities and consular embassies.",
            "The Company accepts no liability for administrative delays by governmental bodies or temporary network outages beyond reasonable operational control.",
          ],
        },
        {
          id: "third-party",
          number: "08",
          title: "Third-Party External Links",
          paragraphs: [
            "This website may feature links pointing to official state portals (e.g., gov.gr, migration.gov.gr). ZILOLEX holds no jurisdiction or liability over external content, availability, or third-party privacy practices.",
          ],
        },
        {
          id: "modifications",
          number: "09",
          title: "Revisions to Terms",
          paragraphs: [
            "ZILOLEX reserves the right to amend these Terms of Use when deemed necessary by updating this page with the corresponding revision date. Continued utilization of services following amendments constitutes formal acceptance.",
          ],
        },
        {
          id: "jurisdiction",
          number: "10",
          title: "Governing Law & Jurisdiction",
          paragraphs: [
            "These Terms of Use are governed by and construed under the laws of Greece and applicable EU regulations. The courts of Athens, Greece, maintain exclusive jurisdiction over any disputes arising from this agreement.",
          ],
        },
        {
          id: "contact",
          number: "11",
          title: "Contact Details",
          paragraphs: [
            "For inquiries regarding these Terms of Use or regulatory compliance, contact our legal and corporate relations desk at info@ZILOLEX.gr or by phone at +30 210 0000000.",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "How we collect, utilize, safeguard, and process personal and corporate data in full compliance with GDPR regulations.",
      lastUpdated: "October 2026",
      badge: "GDPR (EU 2016/679)",
      articles: [
        {
          id: "controller",
          number: "01",
          title: "Data Controller",
          paragraphs: [
            "The Data Controller is ZILOLEX ('Company'), headquartered in Athens, Greece. Contact points: info@ZILOLEX.gr, Phone: +30 210 0000000.",
            "We are committed to preserving your privacy and handling your information transparently, legally, and securely.",
          ],
        },
        {
          id: "data-collected",
          number: "02",
          title: "Data We Collect",
          paragraphs: [
            "Corporate Inquirer Data: Representative full name, company designation, corporate email, phone number, and staffing volume requirements.",
            "Technical Data: IP address, browser type, language preferences, and anonymized engagement metrics collected via cookies upon consent.",
          ],
        },
        {
          id: "purpose",
          number: "03",
          title: "Purpose & Legal Ground for Processing",
          paragraphs: [
            "Responding to employer staffing requests and preparing tailored recruitment proposals (pre-contractual / contractual stage).",
            "Fulfilling statutory legal duties pursuant to the Migration Code (Law 5038/2023).",
            "Legitimate corporate interests regarding cyber protection and continuous user experience optimization.",
          ],
        },
        {
          id: "rights",
          number: "04",
          title: "Your Rights Under GDPR",
          paragraphs: [
            "Right of access, rectification of inaccurate records, erasure ('right to be forgotten'), restriction of processing, data portability, and objection.",
            "You may exercise your rights at any time by emailing info@ZILOLEX.gr. You also retain the right to lodge a complaint with the Hellenic Data Protection Authority (dpa.gr).",
          ],
        },
      ],
    },
  },
};
