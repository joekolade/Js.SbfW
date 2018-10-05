TODO:

    Version 1.0.0
    ---

        - Joekolade.Bureau:Cms Nodetype
            x icon
            x patcheduntil
            x releasedate
            x releasenotes
            x admin url postfix
            x kann Customer zugewiesen werden

        - Joekolade.Bureau:Hoster Nodetype
            - title
            - let's encrypt
            - website
            - adminurl
            - kann Customer zugewiesen werden
                - Field
                - Template
                -> Link BE
                + paket falls bekannt

        - Joekolade.Bureau:Task option/handlungsempfehlung
            - Title
            - main
            - status (int|options)

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

