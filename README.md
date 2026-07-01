# J&C PAPAS - Sitio Web Oficial

Sitio web para **J&C PAPAS**, empresa especializada en papas artesanales precocidas premium.

## Descripción

Aplicación web desarrollada con React, TypeScript y Tailwind CSS. Presenta los productos y servicios de J&C PAPAS, mostrando su proceso de elaboración artesanal, calidad premium y compromiso con la frescura.

## Secciones

- **Hero**: Presentación principal con llamada a la acción
- **Nosotros**: Historia y valores de la empresa
- **Productos**: Catálogo de papas (9x9, 12x12, con cáscara y sin cáscara)
- **Proceso**: Flujo de producción (recolección, lavado, corte, precocción, empaque, transporte)
- **Calidad**: Certificaciones y estándares de calidad
- **Beneficios**: Ventajas de elegir J&C PAPAS
- **Galería**: Imágenes de productos e instalaciones
- **Testimonios**: Opiniones de clientes satisfechos
- **FAQ**: Preguntas frecuentes
- **Contacto**: Formulario de contacto

## Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (iconos)

## Requisitos

- Node.js 18+
- npm o yarn

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/paginaweb_jycpapas.git

# Entrar al directorio
cd paginaweb_jycpapas

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Compilar para producción
npm run preview    # Vista previa de producción
npm run lint       # Verificar código
```

## Despliegue

### Servidor VPS con Nginx

1. Instalar dependencias en el servidor:
```bash
apt update && apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs nginx git
```

2. Clonar y compilar:
```bash
cd /var/www
git clone https://github.com/tu-usuario/paginaweb_jycpapas.git
cd paginaweb_jycpapas
npm install
npm run build
```

3. Configurar Nginx:
```bash
nano /etc/nginx/sites-available/jycpapas
```

Contenido:
```nginx
server {
    listen 80;
    server_name tudominio.com;

    root /var/www/paginaweb_jycpapas/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. Activar sitio:
```bash
ln -s /etc/nginx/sites-available/jycpapas /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

5. HTTPS (opcional):
```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d tudominio.com
```

## Estructura del Proyecto

```
├── public/           # Imágenes y assets estáticos
├── src/
│   ├── components/   # Componentes React
│   ├── hooks/        # Hooks personalizados
│   ├── App.tsx       # Componente principal
│   ├── main.tsx      # Punto de entrada
│   └── index.css     # Estilos globales
├── index.html        # Template HTML
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Contacto

J&C PAPAS - Papas Artesanales Precocidas Premium

---

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-l1ubr7un)
