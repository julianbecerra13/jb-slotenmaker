"use client";

import { useEffect, useState, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeInUp } from "@/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Jan van der Berg",
    location: "Almere Stad",
    rating: 5,
    text: "Buitengesloten op zaterdagavond en binnen 20 minuten was JB er. Zeer professioneel en vriendelijk. De prijs was precies zoals afgesproken, geen verrassingen!",
    date: "2 weken geleden",
  },
  {
    id: 2,
    name: "Marieke de Vries",
    location: "Almere Buiten",
    rating: 5,
    text: "Fantastische service! Mijn slot was kapot en ze hebben het snel vervangen. Duidelijke uitleg over de verschillende opties. Absolute aanrader!",
    date: "1 maand geleden",
  },
  {
    id: 3,
    name: "Pieter Jansen",
    location: "Almere Haven",
    rating: 5,
    text: "Om 2 uur 's nachts buitengesloten, toch binnen 25 minuten geholpen. Nette monteur die zijn werk goed deed. Zeer tevreden!",
    date: "3 weken geleden",
  },
  {
    id: 4,
    name: "Sophie Bakker",
    location: "Almere Poort",
    rating: 5,
    text: "Slot vervangen na inbraakpoging. Heel snel gereageerd en goed advies gekregen over veiligere sloten. Voelde me meteen weer veilig.",
    date: "1 week geleden",
  },
  {
    id: 5,
    name: "Henk Visser",
    location: "Almere Stad",
    rating: 4,
    text: "Goede en snelle service. Prijzen zijn eerlijk en transparant. Zou ze zeker weer bellen als het nodig is.",
    date: "2 maanden geleden",
  },
  {
    id: 6,
    name: "Linda Smit",
    location: "Almere Buiten",
    rating: 5,
    text: "Mijn bejaarde moeder kon niet meer in huis. JB Slotenmaker was er heel snel en behandelde haar met veel geduld en respect. Dankjewel!",
    date: "1 maand geleden",
  },
  {
    id: 7,
    name: "Sander de Groot",
    location: "Almere Haven",
    rating: 5,
    text: "Drie sloten laten vervangen voor SKG*** cilinders. Vakkundig werk en netjes achtergelaten. Prijs-kwaliteit is uitstekend.",
    date: "3 weken geleden",
  },
  {
    id: 8,
    name: "Anja Mulder",
    location: "Almere Stad",
    rating: 5,
    text: "Sleutel afgebroken in het slot, paniek! Maar JB was er binnen een half uur en had het snel opgelost. Top service!",
    date: "2 weken geleden",
  },
  {
    id: 9,
    name: "Martijn Bos",
    location: "Almere Poort",
    rating: 4,
    text: "Betrouwbaar bedrijf. Doen wat ze beloven en zijn eerlijk over de kosten. Fijn dat er lokale vakmensen zijn die je kunt vertrouwen.",
    date: "1 maand geleden",
  },
  {
    id: 10,
    name: "Femke van Dijk",
    location: "Almere Buiten",
    rating: 5,
    text: "Geweldige ervaring! Stond met mijn baby in de regen en kon niet naar binnen. Binnen 15 minuten opgelost. Redders in nood!",
    date: "1 week geleden",
  },
  {
    id: 11,
    name: "Dirk Kramer",
    location: "Almere Stad",
    rating: 5,
    text: "Al twee keer gebruik gemaakt van hun diensten. Beide keren zeer tevreden. Snelle reactie en correcte afhandeling.",
    date: "2 maanden geleden",
  },
  {
    id: 12,
    name: "Nicole Peters",
    location: "Almere Haven",
    rating: 5,
    text: "Eindelijk een slotenmaker die doet wat hij zegt. Geen verborgen kosten, snelle service en vriendelijk personeel. Aanrader!",
    date: "3 weken geleden",
  },
  {
    id: 13,
    name: "Jeroen Willems",
    location: "Almere Poort",
    rating: 5,
    text: "Bedrijfspand slot kapot op maandagochtend. Binnen een uur geholpen zodat we gewoon konden openen. Professionele service!",
    date: "1 maand geleden",
  },
  {
    id: 14,
    name: "Ingrid de Jong",
    location: "Almere Stad",
    rating: 4,
    text: "Fijne ervaring gehad. De monteur legde alles goed uit en gaf tips om inbraak te voorkomen. Aangenaam verrast door de service.",
    date: "2 weken geleden",
  },
  {
    id: 15,
    name: "Bram Hendriks",
    location: "Almere Buiten",
    rating: 5,
    text: "Verhuisd naar Almere en meteen alle sloten laten vervangen. Uitstekend werk, nette afwerking en goede prijs voor meerdere sloten.",
    date: "1 week geleden",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-black font-bold text-lg">
            {review.name.split(" ")[0][0]}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{review.name}</h4>
            <p className="text-sm text-gray-500">{review.location}</p>
          </div>
        </div>
        <Quote className="h-8 w-8 text-yellow-400/30" />
      </div>

      <StarRating rating={review.rating} />

      <p className="mt-4 text-gray-600 flex-grow leading-relaxed">
        &ldquo;{review.text}&rdquo;
      </p>

      <p className="mt-4 text-xs text-gray-400">{review.date}</p>
    </div>
  );
}

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(reviews.length / itemsPerView) - 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const visibleReviews = reviews.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  // Calculate average rating
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
            Klantervaringen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-[family-name:var(--font-poppins)]">
            Wat Onze Klanten Zeggen
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">{avgRating}</span>
            <span className="text-gray-400">|</span>
            <span>{reviews.length} beoordelingen</span>
          </div>
        </FadeInUp>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-yellow-400 hover:border-yellow-400 transition-colors group hidden md:block"
            aria-label="Vorige reviews"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-black" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-yellow-400 hover:border-yellow-400 transition-colors group hidden md:block"
            aria-label="Volgende reviews"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-black" />
          </button>

          {/* Reviews Grid */}
          <div className="overflow-hidden mx-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-yellow-400 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ga naar pagina ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-3 shadow-lg border border-gray-200 active:bg-yellow-400"
            aria-label="Vorige reviews"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-3 shadow-lg border border-gray-200 active:bg-yellow-400"
            aria-label="Volgende reviews"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
