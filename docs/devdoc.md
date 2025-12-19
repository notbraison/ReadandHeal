
orinabraison@gmail.com passpass

chmod 400 "read-and-heal-key.pem"
ssh -i "read-and-heal-key.pem" ubuntu@ec2-13-60-33-58.eu-north-1.compute.amazonaws.com

navbar

Exclude Footer From Certain Pages login,register
Adjust spacing so the footer visually aligns with your sidebar width
Create a compact footer for dashboard pages and a full footer for public pages
Refactor this into a PublicLayout vs AppLayout split

made books table , Created Storage Directories (mkdir -p storage/app/private/books mkdir -p storage/app/public/covers)and linked them (php artisan storage:link)

to Create Purchase Relationship , create a pivot table:  php artisan make:migration create_book_user_table   then add Then add to  User model withPivot