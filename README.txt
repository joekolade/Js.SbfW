TODO:

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

        - Joekolade.Bureau:Task option/handlungsempfehlung
            - Title
            - main
            - status (int|options)
            - add to recommendation

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
        - Projects (ContentNodeType per Customer) => möglichkeit angebot an zu fordern
        - SVG loader (Schäferstab)
        - Joekolade.Bureau:Customer
            + optional hosting paket (FIELD)

    Version X
    ---
        CMSVersion
            - Als Subnode zu CMS


Notes:
===

FELOGIN:

    https://github.com/sandstorm/UserManagement

# ACL (Access Control Lists) Frontend
User - Model (Agency - am besten im Node pflegbar)
User - Model (Customer - am besten im Node pflegbar)

