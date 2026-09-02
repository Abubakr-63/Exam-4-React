import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { API } from '../backend/api'

export default function SearchPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search')?.trim() || '';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setProducts([]);
      return;
    }

    async function getProducts() {
      setLoading(true);
      try {
        const { data } = await axios.get(API);
        const normalizedQuery = query.toLowerCase();
        setProducts(data.filter((product) =>
          JSON.stringify(product).toLowerCase().includes(normalizedQuery)
        ));
      } catch (error) {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, [query]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#446B80] mb-8">
        {t('search.results')}: {query}
      </h1>
      {loading && <p>{t('search.loading')}</p>}
      {!loading && !products.length && <p>{t('search.empty')}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <article
            key={product.id}
            onClick={() => navigate(`/productdetail/${product.id}`)}
            className="border rounded-lg p-4 bg-white cursor-pointer hover:shadow-md transition-shadow"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
            <h2 className="font-semibold mt-4">{product.name}</h2>
            <p className="text-[#72C8EE] mt-2">{product.price} ₽</p>
            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <p><strong>{t('search.details.sku')}:</strong> {product.sku}</p>
              <p><strong>{t('search.details.category')}:</strong> {product.category}</p>
              <p><strong>{t('search.details.brand')}:</strong> {product.brand}</p>
              <p><strong>{t('search.details.country')}:</strong> {product.country}</p>
              <p><strong>{t('search.details.color')}:</strong> {product.color}</p>
              <p><strong>{t('search.details.material')}:</strong> {product.material}</p>
              <p><strong>{t('search.details.pendulum')}:</strong> {product.pendulum}</p>
              <p><strong>{t('search.details.drawer')}:</strong> {product.hasDrawer ? t('search.details.yes') : t('search.details.no')}</p>
              <p className="pt-2"><strong>{t('search.details.description')}:</strong> {product.description}</p>
              {product.features?.length > 0 && (
                <div>
                  <strong>{t('search.details.features')}:</strong>
                  <ul className="list-disc list-inside">
                    {product.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
              )}
              {product.reviews?.length > 0 && (
                <div>
                  <strong>{t('search.details.reviews')}:</strong>
                  {product.reviews.map((review) => (
                    <p key={review.id || review.author} className="mt-1">
                      {review.author}: {review.comment}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
