TODO:

    Version 1.1.0
    ---
        x german translation
        - References
            x wieder einführen
            - optimieren
        - Launch website (to live)


    Version 1.2.0
    ---
        - Online CV


    Version 1.3.0
    ---
        - Joekolade.Bureau:Task
            - "due date"
            - "changed/ordered date"
            - "effort"
            - verfeinern
            - Optik


    Version 2.0.0
    ---

        - FELogin
            - Login funktion
            - Sichtbarkeit Inhalte (Büro/Agentur/Kunde)
                - Dimensions:
                    - Customer (default)
                    - Agency (additional Contents)
        - Last edited (Customer)
            - feld
            - Template
        - Tasks
            Auto update status (by time since last change)
        - Projects (ContentNodeType per Customer) => möglichkeit angebot an zu fordern
        - SVG loader (Schäferstab)
        - Joekolade.Bureau:Customer
            + optional hosting paket (FIELD)

    Version X
    ---
        - Joekolade.BureauCMSVersion
            - Als Subnode zu CMS
        - Joekolade.Bureau:Task
            - requirements (andere Tasks + decision chains)


Release Notes:
===

Version 1.0.0
---

    x Joekolade.Bureau:Cms Nodetype
        x icon
        x patcheduntil
        x releasedate
        x releasenotes
        x admin url postfix
        x kann Customer zugewiesen werden

    x Joekolade.Bureau:Hoster Nodetype
        x title
        x let's encrypt
        x website
        x adminurl
        x kann Customer zugewiesen werden
            x Field
            x Template

    x Joekolade.Bureau:Task option/handlungsempfehlung
        x Title
        x add to customer
        x description
        x status (int|options)


Notes:
===

FELOGIN:

    https://github.com/sandstorm/UserManagement

# ACL (Access Control Lists) Frontend
User - Model (Agency - am besten im Node pflegbar)
User - Model (Customer - am besten im Node pflegbar)

