<template>
  <!-- auto-cols-max??? -->
  <div class="grid grid-cols-4 auto-cols-max gap-4">
    <div class="col-span-4 row-span-2 md:col-span-3 xl:col-span-4">
      <dashboard-hero />
    </div>
    <div
      class="col-span-4 row-span-1 h-8 bg-slate-700 md:row-start-1 md:col-start-4 md:col-end-4 xl:hidden"
    >
      <!-- <progress-panel-spotlight/> -->
    </div>

    <div class="col-span-4 row-span-2 md:row-span-1 justify-center">
      <action-tiles />
    </div>

    <div class="col-span-4 md:row-start-4">
      <spotlight-sets-carousel />
    </div>
  </div>
</template>
<script lang="ts" setup>
import DashboardHero from '@/components/App/DashboardHero/DashboardHero.vue'
// import ProgressPanelSpotlight from '@/components/AppLayout/ProgressPanelSpotlight/ProgressPanelSpotlight.vue'
import ActionTiles from '@/components/App/ActionTiles/ActionTiles.vue'
import SpotlightSetsCarousel from '@/components/App/Carousel/SpotlightSetsCarousel.vue'
</script>

<!-- Sekcja "Ostatnie aktywności" lub "Ostatnie logowania":

Pokaż ostatnie działania użytkownika, takie jak ostatnio używane zestawy, ostatnio edytowane fiszki itp. Użytkownik może szybko wrócić do niedawno wykorzystywanych zasobów.
Sekcja "Rekomendowane dla Ciebie":

Na podstawie historii uczenia się proponuj zestawy fiszek lub kursy, które mogą być interesujące lub użyteczne dla konkretnego użytkownika. Możesz wykorzystać algorytmy rekomendacyjne do tego celu.
Sekcja "Statystyki i postępy":

Przegląd postępów w nauce - liczba fiszek opanowanych, statystyki czasu spędzonego na nauce, progres w poszczególnych zestawach, punktacja, osiągnięcia itp.
Sekcja "Powiadomienia" lub "Aktualności":

Informacje o nowych funkcjach, aktualizacjach, wydarzeniach związanych z aplikacją lub nowymi dostępnymi zestawami fiszek.
Sekcja "Wyszukiwarka":

Możliwość szybkiego wyszukiwania konkretnych zestawów fiszek lub kursów bezpośrednio z dashboardu.
Sekcja "Najnowsze dodane zestawy" lub "Nowości w bibliotece":

Prezentacja nowych zestawów dodanych do biblioteki, co może zainteresować użytkowników i zachęcić ich do eksploracji nowych materiałów.
Sekcja "Polecane kursy" lub "Zestawy tygodnia/miesiąca":

Podkreśl zestawy fiszek lub kursy, które są popularne w danym okresie, aby zachęcić użytkowników do ich przeglądania lub nauki.
Sekcja "Poradniki" lub "Pomoc":

Krótkie poradniki, wskazówki dotyczące wykorzystania funkcji aplikacji, szybki dostęp do pomocy technicznej lub FAQ.
Sekcja "Ulubione" lub "Ostatnio dodane do ulubionych":

Pozwól użytkownikom oznaczać swoje ulubione zestawy fiszek lub kursy, aby łatwo do nich wracać.
Sekcja "Społeczność" lub "Forum":

Jeśli istnieje funkcja społecznościowa, gdzie użytkownicy mogą dzielić się swoimi zestawami lub dyskutować na temat nauki, możesz umieścić tu link do tego obszaru.
Pamiętaj, że dobry dashboard powinien być intuicyjny, łatwy w nawigacji i dostarczać użytkownikowi przydatnych informacji oraz szybkiego dostępu do funkcji aplikacji. Dopasuj zawartość do potrzeb i zachęt Twojej docelowej grupy użytkowników.





 -->
