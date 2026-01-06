<!DOCTYPE html>
<html lang="cs">
<head>
    <title>Test Turnstile</title>
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</head>
<body>
    <form id="my-form">
        <div class="cf-turnstile" data-sitekey="1x00000000000000000000AA"></div>
        <button type="submit">Odeslat k ověření</button>
    </form>

    <script>
        const form = document.getElementById('my-form');
        form.onsubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            
            // Odeslání tokenu na náš backend (Pages Function)
            const response = await fetch('/api/verify', {
                method: 'POST',
                body: formData
            });
            
            const outcome = await response.json();
            alert(outcome.success ? 'Ověření proběhlo OK!' : 'Chyba v ověření');
        };
    </script>
</body>
</html>
