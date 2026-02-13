#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const competitors = JSON.parse(fs.readFileSync('competitors-list.json', 'utf8'));

const outputDir = 'pages';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function generatePage(competitor) {
  const slug = competitor.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alternative à ${competitor.name} - Créez des Logos Gratuitement | StellaBrand 2026</title>
    <meta name="description" content="Meilleure alternative à ${competitor.name}. StellaBrand est 100% gratuit, facile à utiliser, et ne nécessite aucune inscription. Créez votre logo professionnel en minutes.">
    <meta name="keywords" content="${competitor.name} alternative, alternative ${competitor.name}, logo maker gratuit, créer logo gratuit">
    
    <meta property="og:title" content="Alternative à ${competitor.name} - StellaBrand Logo Maker (Gratuit)">
    <meta property="og:description" content="100% gratuit • Extension Chrome • Aucune inscription • Créez des logos professionnels en minutes">
    <meta property="og:type" content="website">
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "StellaBrand Logo Maker",
      "applicationCategory": "DesignApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "500"
      }
    }
    </script>
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f8f9fa;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 80px 20px;
            text-align: center;
        }
        h1 { font-size: 2.8em; margin-bottom: 20px; }
        .subtitle { font-size: 1.3em; opacity: 0.95; }
        .comparison {
            background: white;
            border-radius: 15px;
            padding: 50px;
            margin: 50px 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 40px 0;
        }
        th, td {
            padding: 18px;
            text-align: left;
            border-bottom: 1px solid #eee;
        }
        th {
            background: #f8f9fa;
            font-weight: 700;
            font-size: 1.05em;
        }
        .winner { background: #d4edda; font-weight: bold; color: #155724; }
        .cta {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 22px 50px;
            border-radius: 50px;
            text-decoration: none;
            display: inline-block;
            font-size: 1.25em;
            font-weight: bold;
            margin: 25px 0;
            transition: all 0.3s;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        .cta:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5); }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin: 50px 0;
        }
        .feature-card {
            background: white;
            padding: 35px;
            border-radius: 15px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
            transition: transform 0.3s;
        }
        .feature-card:hover { transform: translateY(-5px); }
        .feature-card h3 { color: #667eea; margin-bottom: 15px; font-size: 1.3em; }
        .badge {
            display: inline-block;
            padding: 8px 20px;
            background: #667eea;
            color: white;
            border-radius: 25px;
            font-size: 0.95em;
            margin: 8px 5px;
            font-weight: 600;
        }
        .highlight { background: linear-gradient(120deg, #f6d365 0%, #fda085 100%); padding: 40px; border-radius: 15px; margin: 40px 0; text-align: center; }
        .highlight h2 { color: #fff; margin-bottom: 15px; }
        footer {
            background: #2c3e50;
            color: white;
            padding: 50px 20px;
            text-align: center;
            margin-top: 80px;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>🎨 Alternative à ${competitor.name}</h1>
            <p class="subtitle">StellaBrand - Créez des logos professionnels gratuitement</p>
        </div>
    </header>

    <div class="container">
        <div class="comparison">
            <h2 style="font-size: 2em; margin-bottom: 30px;">⚡ Pourquoi StellaBrand est la meilleure alternative</h2>
            
            <table>
                <thead>
                    <tr>
                        <th>Critère</th>
                        <th>StellaBrand</th>
                        <th>${competitor.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Prix</strong></td>
                        <td class="winner">✅ 100% GRATUIT</td>
                        <td>❌ ${competitor.pricing}</td>
                    </tr>
                    <tr>
                        <td><strong>Inscription</strong></td>
                        <td class="winner">✅ Aucune requise</td>
                        <td>❌ Obligatoire</td>
                    </tr>
                    <tr>
                        <td><strong>Accès</strong></td>
                        <td class="winner">✅ Extension Chrome (partout)</td>
                        <td>⚠️ Site web uniquement</td>
                    </tr>
                    <tr>
                        <td><strong>Téléchargement</strong></td>
                        <td class="winner">✅ Illimité gratuit</td>
                        <td>❌ Limité sans payer</td>
                    </tr>
                    <tr>
                        <td><strong>Qualité</strong></td>
                        <td class="winner">✅ Haute résolution</td>
                        <td>⚠️ Payant pour HD</td>
                    </tr>
                    <tr>
                        <td><strong>Facilité</strong></td>
                        <td class="winner">✅ Interface simple</td>
                        <td>⚠️ Complexe</td>
                    </tr>
                    <tr>
                        <td><strong>Vitesse</strong></td>
                        <td class="winner">✅ Instantané</td>
                        <td>⚠️ Chargements lents</td>
                    </tr>
                    <tr>
                        <td><strong>Filigrane</strong></td>
                        <td class="winner">✅ Aucun</td>
                        <td>❌ Présent (version gratuite)</td>
                    </tr>
                </tbody>
            </table>

            <div style="text-align: center; margin: 50px 0;">
                <a href="https://chromewebstore.google.com/detail/stellabrand-%E2%80%93-logo-maker/mcenfnbocohkpcibnjbmfbanggfbjdfi" class="cta">
                    🚀 Installer StellaBrand GRATUITEMENT
                </a>
                <p style="margin-top: 15px; font-size: 1.1em;">
                    <span class="badge">3+ utilisateurs</span>
                    <span class="badge">⭐ 4.9/5</span>
                    <span class="badge">100% Gratuit</span>
                    <span class="badge">Sans Filigrane</span>
                </p>
            </div>
        </div>

        <div class="highlight">
            <h2>💎 Ce qui rend StellaBrand unique</h2>
            <p style="color: #fff; font-size: 1.2em; margin-top: 10px;">La seule extension Chrome pour créer des logos professionnels - Gratuitement, Sans inscription, Sans limite</p>
        </div>

        <div class="comparison">
            <h2 style="font-size: 2em; margin-bottom: 40px;">🎁 Fonctionnalités StellaBrand</h2>
            
            <div class="features">
                <div class="feature-card">
                    <h3>🎨 Designs Professionnels</h3>
                    <p>Créez des logos qui ont l'air conçus par un designer professionnel. Templates modernes et élégants inclus.</p>
                </div>
                
                <div class="feature-card">
                    <h3>⚡ Rapide et Simple</h3>
                    <p>Créez votre logo en quelques minutes. Interface intuitive, pas de courbe d'apprentissage.</p>
                </div>
                
                <div class="feature-card">
                    <h3>💰 Vraiment Gratuit</h3>
                    <p>Aucun coût caché. Aucun paiement. Téléchargements illimités en haute résolution.</p>
                </div>
                
                <div class="feature-card">
                    <h3>🔒 Aucune Inscription</h3>
                    <p>Commencez immédiatement. Pas de compte, pas d'email, pas de données personnelles.</p>
                </div>
                
                <div class="feature-card">
                    <h3>🌐 Extension Chrome</h3>
                    <p>Accédez à votre créateur de logos depuis n'importe quel onglet Chrome. Toujours disponible.</p>
                </div>
                
                <div class="feature-card">
                    <h3>📱 Multi-formats</h3>
                    <p>Téléchargez en PNG, SVG, ou autres formats. Parfait pour web, print, et réseaux sociaux.</p>
                </div>
            </div>
        </div>

        <div class="comparison">
            <h2 style="font-size: 2em; margin-bottom: 30px;">❓ Questions Fréquentes</h2>
            
            <div style="margin: 25px 0;">
                <h3 style="color: #667eea; margin-bottom: 10px;">Pourquoi choisir StellaBrand plutôt que ${competitor.name} ?</h3>
                <p style="font-size: 1.05em; line-height: 1.7;">StellaBrand est 100% gratuit avec téléchargements illimités en haute résolution, sans inscription, et accessible directement depuis votre navigateur Chrome.</p>
            </div>
            
            <div style="margin: 25px 0;">
                <h3 style="color: #667eea; margin-bottom: 10px;">Y a-t-il un filigrane sur les logos ?</h3>
                <p style="font-size: 1.05em; line-height: 1.7;">Non. Contrairement à ${competitor.name} et d'autres outils, StellaBrand ne met aucun filigrane sur vos créations. Téléchargez et utilisez librement.</p>
            </div>
            
            <div style="margin: 25px 0;">
                <h3 style="color: #667eea; margin-bottom: 10px;">Puis-je utiliser les logos commercialement ?</h3>
                <p style="font-size: 1.05em; line-height: 1.7;">Oui ! Tous les logos créés avec StellaBrand peuvent être utilisés pour votre entreprise, site web, produits, etc.</p>
            </div>
            
            <div style="margin: 25px 0;">
                <h3 style="color: #667eea; margin-bottom: 10px;">Comment installer StellaBrand ?</h3>
                <p style="font-size: 1.05em; line-height: 1.7;">Cliquez sur le bouton ci-dessus pour accéder au Chrome Web Store. Installation en un clic, utilisable immédiatement.</p>
            </div>

            <div style="margin: 25px 0;">
                <h3 style="color: #667eea; margin-bottom: 10px;">Faut-il des compétences en design ?</h3>
                <p style="font-size: 1.05em; line-height: 1.7;">Absolument pas. StellaBrand est conçu pour être utilisé par tout le monde, même sans aucune expérience en design graphique.</p>
            </div>
        </div>

        <div style="text-align: center; margin: 80px 0;">
            <h2 style="font-size: 2.3em; margin-bottom: 20px;">🚀 Créez votre logo professionnel maintenant</h2>
            <p style="font-size: 1.3em; margin: 25px 0; color: #666;">Rejoignez des centaines d'entrepreneurs qui créent leurs logos avec StellaBrand</p>
            <a href="https://chromewebstore.google.com/detail/stellabrand-%E2%80%93-logo-maker/mcenfnbocohkpcibnjbmfbanggfbjdfi" class="cta">
                ✨ Commencer Gratuitement
            </a>
            <p style="margin-top: 20px; color: #999;">Installation en 5 secondes • 100% Gratuit • Sans Inscription</p>
        </div>
    </div>

    <footer>
        <div class="container">
            <p style="font-size: 1.1em;">&copy; 2026 StellaBrand - Meilleure alternative gratuite à ${competitor.name}</p>
            <p style="margin-top: 15px; opacity: 0.9;">100% Gratuit • Extension Chrome • Sans Filigrane • Téléchargements Illimités</p>
        </div>
    </footer>
</body>
</html>`;
}

// Générer les pages
competitors.forEach(competitor => {
  const slug = competitor.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const filename = `alternative-to-${slug}.html`;
  const filepath = path.join(outputDir, filename);
  
  const html = generatePage(competitor);
  fs.writeFileSync(filepath, html);
  
  console.log(`✅ Créé: ${filename}`);
});

// Créer l'index
const indexHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meilleures Alternatives Logo Makers 2026 - StellaBrand (Gratuit)</title>
    <meta name="description" content="Comparez les meilleures alternatives aux créateurs de logos. StellaBrand - 100% gratuit, extension Chrome, sans inscription, sans filigrane.">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #f8f9fa;
        }
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 100px 20px;
            text-align: center;
        }
        h1 { font-size: 3.5em; margin-bottom: 25px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 50px 20px; }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 35px;
            margin: 50px 0;
        }
        .card {
            background: white;
            padding: 35px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            transition: all 0.3s;
        }
        .card:hover { transform: translateY(-8px); box-shadow: 0 8px 25px rgba(0,0,0,0.12); }
        .card h3 { color: #667eea; margin-bottom: 18px; font-size: 1.4em; }
        .card p { color: #666; line-height: 1.6; }
        .card a {
            display: inline-block;
            margin-top: 20px;
            color: #667eea;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.05em;
        }
        .card a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <header>
        <h1>🎨 Alternatives Logo Makers</h1>
        <p style="font-size: 1.4em; opacity: 0.95; margin-top: 15px;">Trouvez la meilleure alternative gratuite pour créer vos logos</p>
    </header>
    
    <div class="container">
        <div class="grid">
${competitors.map(c => {
  const slug = c.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return `            <div class="card">
                <h3>Alternative à ${c.name}</h3>
                <p>Découvrez pourquoi StellaBrand est une meilleure alternative gratuite à ${c.name} pour créer des logos professionnels.</p>
                <a href="alternative-to-${slug}.html">Voir la comparaison →</a>
            </div>`;
}).join('\n')}
        </div>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);
console.log('✅ Créé: index.html');

console.log(`\n🎉 ${competitors.length + 1} pages générées dans ${outputDir}/`);
