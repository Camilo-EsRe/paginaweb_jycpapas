declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

interface EcommerceItem {
  item_id: string;
  item_name: string;
  price: number;
  quantity?: number;
}

interface EcommerceData {
  currency: string;
  value?: number;
  items: EcommerceItem[];
}

export function pushEcommerceEvent(event: string, ecommerce: EcommerceData) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ecommerce });
}
