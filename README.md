## Prérequis

- Node.js 18.x ou plus récent
- npm ou pnpm (pnpm est recommandé, voir le package.json)

## Installation locale

1. Clonez le dépôt
   ```bash
   git clone [url-du-repo]
   cd fiscalite-dialyse-maroc
   ```

2. Installez les dépendances
   ```bash
   # Avec npm
   npm install

   # Avec pnpm (recommandé)
   pnpm install
   ```

3. Lancez le serveur de développement
   ```bash
   # Avec npm
   npm run dev

   # Avec pnpm
   pnpm dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Construction pour la production

```bash
# Avec npm
npm run build

# Avec pnpm
pnpm build
```

## Options de déploiement

### 1. Déploiement standard Next.js

Après avoir construit l'application, vous pouvez la démarrer avec:

```bash
# Avec npm
npm run start

# Avec pnpm
pnpm start
```

### 2. Déploiement sur Vercel

L'option la plus simple pour déployer une application Next.js est d'utiliser la [plateforme Vercel](https://vercel.com/new) créée par les développeurs de Next.js.

1. Créez un compte sur Vercel
2. Importez votre dépôt GitHub/GitLab/Bitbucket
3. Vercel détectera automatiquement qu'il s'agit d'un projet Next.js et configurera les paramètres de build appropriés

### 3. Déploiement sur Cloudflare Pages

Ce projet inclut une configuration pour Cloudflare Pages:

1. Installez Wrangler CLI
   ```bash
   npm install -g wrangler
   ```

2. Construisez l'application pour Cloudflare
   ```bash
   # Avec npm
   npm run build:worker

   # Avec pnpm
   pnpm build:worker
   ```

3. Prévisualisez le déploiement localement
   ```bash
   # Avec npm
   npm run preview

   # Avec pnpm
   pnpm preview
   ```

4. Pour déployer sur Cloudflare Pages:
   - Connectez-vous à votre compte Cloudflare
   - Créez un nouveau projet Pages
   - Configurez les paramètres de build:
     - Commande de build: `npm run build:worker`
     - Répertoire de sortie: `.next`

## Variables d'environnement

Pour personnaliser votre déploiement, vous pouvez définir les variables d'environnement suivantes:

```
# Exemple de fichier .env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

## Support

Pour des questions concernant ce projet, veuillez contacter [email de contact]. 