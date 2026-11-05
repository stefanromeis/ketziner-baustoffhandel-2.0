import angel from '../assets/sortiment/angel.jpg';
import befestigung from '../assets/sortiment/befestigung.jpg';
import chemie from '../assets/sortiment/chemie.jpg';
import dach from '../assets/sortiment/dach.jpg';
import daemmung from '../assets/sortiment/daemmung.jpg';
import elektro from '../assets/sortiment/elektro.jpg';
import futtermittel from '../assets/sortiment/futtermittel.jpg';
import garten from '../assets/sortiment/garten.jpg';
import hoch from '../assets/sortiment/hoch.jpg';
import holz from '../assets/sortiment/holz.jpg';
import hwerkzeuge from '../assets/sortiment/hwerkzeuge.jpg';
import kohlen from '../assets/sortiment/kohlen.jpg';
import maler from '../assets/sortiment/maler.jpg';
import schutt from '../assets/sortiment/schutt.jpg';
import trocken from '../assets/sortiment/trocken.jpg';
import kranLkw from '../assets/fuhrpark/kran-lkw.png';
import kranLkw2 from '../assets/fuhrpark/kran-lkw-2.png';
import multicar from '../assets/fuhrpark/multicar.png';
import radlader from '../assets/fuhrpark/radlader.png';
import stapler from '../assets/fuhrpark/stapler.png';
import berger from '../assets/partner/berger.jpg';
import blackdecker from '../assets/partner/blackdecker.jpg';
import bosch from '../assets/partner/bosch.jpg';
import domapor from '../assets/partner/domapor.jpg';
import ehl from '../assets/partner/ehl.jpg';
import exori from '../assets/partner/exori.jpg';
import laukien from '../assets/partner/laukien.jpg';
import rekord from '../assets/partner/rekord.jpg';
import rheinbraun from '../assets/partner/rheinbraun.jpg';
import weber from '../assets/partner/weber.jpg';
import wienerberger from '../assets/partner/wienerberger.jpg';
import zebco from '../assets/partner/zebco.jpg';

export const contact = {
  name: 'Ketziner Baustoffhandel Mier',
  street: 'Am Mühlenweg',
  postalCode: '14669',
  locality: 'Ketzin/Havel',
  city: '14669 Ketzin/Havel',
  phone: '033233 / 80361',
  phoneHref: 'tel:+493323380361',
  mobile: '0172 / 9084092',
  mobileHref: 'tel:+491729084092',
  email: 'info@ketziner-baustoffhandel.de',
  fax: '033233 / 746287',
  owner: 'Thomas Mier',
  lat: 52.4797413,
  lng: 12.8537046,
  mapsHref: 'https://www.google.com/maps/dir/?api=1&destination=Ketziner-Baustoffhandel%2C%20Am%20M%C3%BChlenweg%2C%2014669%20Ketzin%2FHavel',
  googlePlaceHref: 'https://maps.google.com/?cid=6963416918652865356',
};

export const navItems = [
{ label: 'Sortiment', href: '#sortiment' },
{ label: 'Leistungen', href: '#leistungen' },
{ label: 'Angebote', href: '#angebote' },
{ label: 'Über uns', href: '#ueber-uns' },
{ label: 'Kontakt', href: '#kontakt' }];


export const advantages = [
{ title: 'Fachhandel vor Ort', text: 'Kaufen, wo Handwerker einkaufen – direkt in Ketzin.' },
{ title: 'Kompetente Beratung', text: 'Wir planen Mengen und Material mit Ihnen gemeinsam.' },
{ title: 'Marken von A bis Z', text: 'Geprüfte Qualität für alle Gewerke.' },
{ title: 'Faire Preise', text: 'Leistungsfähig kalkuliert – auch für Privatkunden.' }];


export const productCategories = [
  { name: 'Hochbaustoffe', image: hoch, examples: 'KS-Steine, Gasbetonsteine, Porotonsteine, Klinker, Estrich-Beton, Zementmörtel, Fertigbeton, Stahl, Schornsteine' },
  { name: 'Dachbaustoffe', image: dach, examples: 'Dachsteine aus Ton und Beton, Dachentwässerung aus Zink, Kupfer und PVC, Metallschutzdächer' },
  { name: 'Dämmstoffe', image: daemmung, examples: 'Styropor, Styrodur, Schüttungen, Klemmfilz, Trennwandplatten' },
  { name: 'Gartenbaustoffe', image: garten, examples: 'Betonpflaster, KG-Rohre, Drainage, Doppelstabmattenzaun, Stahlbetondielen, Betonschächte, Brunnenringe, Betonstützen, Winkelstützen' },
  { name: 'Holzbaustoffe', image: holz, examples: 'Bohlen, Glattkantenbretter, Kanthölzer, Latten, Profilholz, Schalung, OSB-Platten, KVH' },
  { name: 'Trockenbaustoffe', image: trocken, examples: 'Dampfbremsfolie, Gipskartonplatten, Ständerwerk-Profile, Spachtel' },
  { name: 'Bauchemie', image: chemie, examples: 'Grundierung, Imprägnierung, Kleber, Abdichtung, Ausgleichsmasse, Dichtstoffe, Montagekleber, PU-Schaum' },
  { name: 'Malerbedarf', image: maler, examples: 'Innen- und Außenfarben, Rostschutz, Holzschutz, Abdeckfolien, Gewebeplanen, Pinsel, Spachtel' },
  { name: 'Handwerkzeuge', image: hwerkzeuge, examples: 'Schraubendreher, Hammer, Sägen, Zwingen, Bolzenschneider, Spaten, Schaufeln' },
  { name: 'Elektrowerkzeuge', image: elektro, examples: 'Mischer, Schlagbohrer, Winkelschleifer, Sägen, Hobel, Schleifmaschinen, Akkuschrauber, Bohrmaschinen' },
  { name: 'Befestigungsmaterial', image: befestigung, examples: 'Dübel, Schrauben, Nägel, Bolzen' },
  { name: 'Schüttgüter', image: schutt, examples: 'Kies, Waschkies, Sand, Ziegelrecycling, Betonrecycling, Oberboden dunkel, Splitt, Brechsand' },
  { name: 'Brennstoffe', image: kohlen, examples: 'Kohlen lose oder im Bündel, Anzündholz, Kaminholz, Holzbriketts' },
  { name: 'Futtermittel', image: futtermittel, examples: 'Hühner-, Tauben-, Pferde- und Entenfutter' },
  { name: 'Angelzubehör', image: angel, examples: 'Ruten und Rollen von Exori und Zebco, Schnüre und Stahlvorfächer, Haken, lebende Köder, Futtermittel' },
];

export const services = [
  {
    title: 'Lieferung auf die Baustelle',
    text: 'Termingerecht im Havelland und Umgebung – vom Einzelauftrag bis zur Großbaustelle.',
  },
  {
    title: 'Kranentladung',
    text: 'Mit unseren Kran-LKW setzen wir Paletten genau dort ab, wo Sie sie brauchen.',
  },
  {
    title: 'Kompetente Beratung',
    text: 'Unser Team berät Sie aus jahrelanger Erfahrung – persönlich vor Ort oder am Telefon.',
  },
  {
    title: 'Radlade- und Selbstladearbeiten',
    text: 'Unser Radlader packt mit an, wenn Material bewegt oder geladen werden muss.',
  },
  {
    title: 'Bodenaushub entsorgen',
    text: 'Wir nehmen Bodenaushub in Kleinstmengen an und entsorgen ihn für Sie.',
  },
  {
    title: 'Gartenabfälle entsorgen',
    text: 'Auch Gartenabfälle in Kleinstmengen sind bei uns richtig.',
  },
];

export const fleet = [
  { name: 'Kran-LKW', detail: 'Paletten und Schwerlast direkt an den Bauort', image: kranLkw, alt: 'Blauer Kran-LKW des Ketziner Baustoffhandels', large: true },
  { name: 'Kran-LKW II', detail: 'Zweites Kranfahrzeug für Ihre Lieferung', image: kranLkw2, alt: 'Orangefarbener Kran-LKW des Ketziner Baustoffhandels', large: true },
  { name: 'Multicar', detail: 'Kompakter Kipper für kleinere Mengen', image: multicar, alt: 'Orangefarbener Multicar mit Kippmulde', large: false },
  { name: 'Radlader', detail: 'Radlade- und Selbstladearbeiten', image: radlader, alt: 'Rot-schwarzer Radlader mit Schaufel', large: false },
  { name: 'Stapler', detail: 'Schnelle Beladung auf dem Hof', image: stapler, alt: 'Roter Gabelstapler', large: false },
];

export const partners = [
  { name: 'Laukien', logo: laukien },
  { name: 'EHL', logo: ehl },
  { name: 'Domapor', logo: domapor },
  { name: 'Wienerberger', logo: wienerberger },
  { name: 'Saint-Gobain Weber', logo: weber },
  { name: 'Berger', logo: berger },
  { name: 'Lausitzer Rekord', logo: rekord },
  { name: 'Rheinbraun Brennstoff', logo: rheinbraun },
  { name: 'Black & Decker', logo: blackdecker },
  { name: 'Bosch', logo: bosch },
  { name: 'Exori', logo: exori },
  { name: 'Zebco', logo: zebco },
];

export const openingHours = [
{ label: 'Montag – Donnerstag', time: '08:00 – 17:00 Uhr', days: [1, 2, 3, 4] },
{ label: 'Freitag', time: '08:00 – 18:00 Uhr', days: [5] },
{ label: 'Samstag', time: '09:00 – 12:00 Uhr', days: [6] },
{ label: 'Sonntag', time: 'geschlossen', days: [0] }];


export const footerLinks = [
  { label: 'Impressum', href: 'impressum/' },
  { label: 'Datenschutz', href: 'datenschutz/' },
];

// Von Hand gepflegter Stand aus dem Google-Maps-Eintrag.
export const googleRating = {
  value: '4,8',
  count: 109,
  asOf: 'November 2026',
};
