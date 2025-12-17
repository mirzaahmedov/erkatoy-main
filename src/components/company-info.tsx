import {
  faBookOpen,
  faChild,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CompanyInfo() {
  return (
    <section className="max-w-md text-white space-y-4">
      <h3 className="text-white text-xl font-semibold">Erkatoy.uz</h3>

      <p className="text-sm text-white/80 leading-relaxed">
        Erkatoy.uz — bolajonlar uchun mo‘ljallangan ertaklar, she’rlar,
        topishmoqlar va bolalar adabiyotiga oid qiziqarli materiallar jamlangan
        o‘zbekcha vebsayt. Sayt kichkintoylarning tasavvuri, fikrlashi va
        nutqini rivojlantirishga xizmat qiladi.
      </p>

      <ul className="space-y-3 text-sm">
        <li className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-orange-400"
          />
          <span>Toshkent, O‘zbekiston</span>
        </li>

        <li className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-green-400"
          />
          <span>+998 90 123 45 67</span>
        </li>

        <li className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-blue-400"
          />
          <span>info@erkatoy.uz</span>
        </li>

        <li className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faChild}
            className="text-pink-400"
          />
          <span>Yosh toifa: 3–10 yosh</span>
        </li>

        <li className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faBookOpen}
            className="text-yellow-400"
          />
          <span>O‘qish va tinglash orqali o‘rganish</span>
        </li>
      </ul>
    </section>
  );
}
