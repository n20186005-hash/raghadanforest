// مركز البيانات المحايدة للموقع: اسم الموقع لمحركات البحث ونقاط الحقائق المشتركة.
// صيغة اسم الموقع لمحركات البحث: «اسم المعلم + المدينة + دليل سياحي».

export const SITE_NAME = 'غابة رغدان، الباحة — دليل سياحي';
export const SITE_NAME_EN = 'Raghadan Forest Park, Al Bahah — Travel Guide';

export function withSiteName(suffix?: string): string {
  return suffix ? `${suffix} | ${SITE_NAME}` : SITE_NAME;
}

export function withSiteNameEn(suffix?: string): string {
  return suffix ? `${suffix} | ${SITE_NAME_EN}` : SITE_NAME_EN;
}

// حقائق الموقع محايدة ونوعية (لا توصيات بتجار بعينهم).
export const GOVT_TOURISM_URL =
  'https://www.visitsaudi.com/ar/al-baha/attractions/raghadan-forest-in-al-baha';

export const NAP = {
  name: 'غابة رغدان',
  streetAddress: '4657 الحكم الزروقي، 6905',
  locality: 'الباحة',
  region: 'منطقة الباحة',
  postalCode: '65731',
  country: 'المملكة العربية السعودية',
  countryCode: 'SA',
  latitude: 20.0220551,
  longitude: 41.4334279,
  mapsUrl: 'https://maps.app.goo.gl/fWTXPEcNSYzMdcmRA'
};
