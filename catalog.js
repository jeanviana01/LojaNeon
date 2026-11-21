const products = [
  {
    "name": "PC Gamer MSI MLG · Ryzen 7 7800X3D · RTX 5070 Ti",
    "category": "PCs Gamer",
    "price": 28857.54,
    "photo": "https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/g/a/gabinete-gamer-msi-pano-130r-mlg-edition-002.jpg"
  },
  {
    "name": "Monitor MSI MAG 27″ · WQHD · 240 Hz",
    "category": "Monitores",
    "price": 1199.99,
    "photo": "https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/m/a/mag-274qf-x24.jpg"
  },
  {
    "name": "Teclado Corsair Clipper Pro Mini 60 RGB",
    "category": "Periféricos",
    "price": 409.99,
    "photo": "https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/h/ch-979101j-na.jpg"
  },
  {
    "name": "Gabinete Corsair 2800X RS-R ARGB",
    "category": "Hardware",
    "price": 649.99,
    "photo": "https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/c/cc-9011347-ww.jpg"
  },
  {
    "name": "Monitor Pichau Athen V3M 27″ · Full HD · 200 Hz",
    "category": "Monitores",
    "price": 719.99,
    "photo": "https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/p/g/pg-ath27v3m-bl01.jpg"
  },
  {
    "name": "Processador AMD Ryzen 5 7600X3D",
    "category": "Hardware",
    "price": 1599.99,
    "photo": "https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/0/100-100001721wof.jpg"
  },
  {
    "name": "Suporte articulado Zinnia Fortress 100 Pro",
    "category": "Periféricos",
    "price": 89.99,
    "photo": "https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/z/n/zno-ftrs100pro-bk01-v2.jpg"
  },
  {
    "name": "Fonte ASUS ROG Strix 1200 W Platinum",
    "category": "Hardware",
    "price": 1749.99,
    "photo": "https://media.pichau.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/r/o/rog-strix-1200p-gaming-e415559.jpg"
  },
  {
    "name": "Monitor Gigabyte GS24F14 · 23,8″ · 144 Hz",
    "category": "Monitores",
    "price": 549.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/monitor-gamer-gigabyte-gs24f14-238-pol-full-hd-ips-144hz-1ms-104srgb-hdmidp_266560.jpg"
  },
  {
    "name": "Placa-mãe ASUS TUF Gaming B550M-Plus · AM4",
    "category": "Hardware",
    "price": 779.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/placa-mae-asus-tuf-gaming-b550m-plus-chipset-b550-amd-am4-matx-ddr4_98578.jpg"
  },
  {
    "name": "Placa-mãe ASUS TUF Gaming A520M-Plus II · AM4",
    "category": "Hardware",
    "price": 569.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/placa-mae-asus-tuf-gaming-a520m-plus-ii-chipset-a520-amd-am4-matx-ddr4-90mb17g0-m0eay0_160461.png"
  },
  {
    "name": "Fonte SuperFrame Leadex III · 850 W · 80 Plus Gold",
    "category": "Hardware",
    "price": 699.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/fonte-superframe-leadex-iii-powered-by-super-flower-850w-80-plus-gold-cybenetics-gold-full-modular-atx-31-sf-850f14ge_260180.jpg"
  },
  {
    "name": "Placa-mãe Biostar A520MT · AM4",
    "category": "Hardware",
    "price": 389.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/placa-mae-biostar-a520mt-chipset-a520-amd-am4-matx-ddr4_178524.jpg"
  },
  {
    "name": "Processador Intel Core i3-12100F · LGA 1700",
    "category": "Hardware",
    "price": 459.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/processador-intel-core-i3-12100f-33ghz-43ghz-turbo-12-geracao-4-cores-8-threads-lga-1700-bx8071512100f_136288.jpg"
  },
  {
    "name": "Processador AMD Ryzen 5 7600 · AM5",
    "category": "Hardware",
    "price": 1179.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/processador-amd-ryzen-5-7600-38ghz-51ghz-turbo-6-cores-12-threads-am5-com-cooler-amd-wraith-stealth-100-100001015box_158818.png"
  },
  {
    "name": "Processador Intel Core i5-14600KF · LGA 1700",
    "category": "Hardware",
    "price": 1649.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/processador-intel-core-i5-14600kf-35-ghz-53ghz-turbo-14-geracao-14-cores-20-threads-lga-1700-bx8071514600kf_179833.png"
  },
  {
    "name": "Processador AMD Ryzen 5 7600X · AM5",
    "category": "Hardware",
    "price": 1399.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/processador-amd-ryzen-5-7600x-47ghz-53ghz-turbo-6-cores-12-threads-am5-100-100000593wof_151058.png"
  },
  {
    "name": "Placa-mãe Gigabyte B760M AORUS Elite Wi-Fi 6E · DDR5",
    "category": "Hardware",
    "price": 1299.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b760m-aorus-elite-wifi6e-p-gen5-chipset-b760-intel-lga-1700-matx-ddr5_260035.jpg"
  },
  {
    "name": "Processador Intel Core i5-12400F · LGA 1700",
    "category": "Hardware",
    "price": 699.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/processador-intel-core-i5-12400f-25ghz-44ghz-turbo-12-geracao-6-cores-12-threads-lga-1700-bx8071512400f_135084.jpg"
  },
  {
    "name": "Placa-mãe MSI A520M-A Pro · AM4",
    "category": "Hardware",
    "price": 389.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/placa-mae-msi-a520m-a-pro-chipset-a520-amd-am4-matx-ddr4-911-7c96-002_124718.jpg"
  },
  {
    "name": "Placa-mãe Gigabyte B550M AORUS Elite · AM4",
    "category": "Hardware",
    "price": 749.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b550m-aorus-elite-chipset-b550-amd-am4-atx-ddr4_110070.png"
  },
  {
    "name": "Placa-mãe ASUS Prime H610M-A · DDR5",
    "category": "Hardware",
    "price": 559.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/placa-mae-asus-prime-h610m-a-chipset-h610-intel-lga-1700-matx-ddr5-90mb1g20-m0eay0_198042.jpg"
  },
  {
    "name": "Memória Corsair Vengeance · 8 GB · DDR5 5200",
    "category": "Memórias",
    "price": 329.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/memoria-ddr5-corsair-vengeance-8gb-5200mhz-preto-cmk8gx5m1b5200c40_259623.jpg"
  },
  {
    "name": "Memória Patriot Viper Venom · 8 GB · DDR5 6000",
    "category": "Memórias",
    "price": 379.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/memoria-ddr5-patriot-viper-venom-8gb-6000mhz-preto-pvv58g600c40_257480.jpg"
  },
  {
    "name": "Monitor Samsung Essential S3 · 27″ · 120 Hz",
    "category": "Monitores",
    "price": 699.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/monitor-gamer-samsung-essential-s3-27-pol-full-hd-ips-120hz-hdmi-ls27f320galmzd_267650.jpg"
  },
  {
    "name": "Monitor MSI PRO MP242 E14A · 24″ · 144 Hz",
    "category": "Monitores",
    "price": 634.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/monitor-msi-pro-mp242-e14a-24-pol-full-hd-ips-1ms-144hz-121-srgb-adaptive-sync-hdmivga_274270.jpg"
  },
  {
    "name": "Monitor ASUS ROG Strix XG27UCMG · 27″ · 4K 240 Hz",
    "category": "Monitores",
    "price": 5299.9,
    "photo": "https://img.terabyteshop.com.br/produto/g/monitor-gamer-asus-rog-strix-xg27ucmg-27-pol-triple-mode-4k-240hz-qhd-400hz-ou-fhd-488hz-03ms-fast-ips-g-sync-hdr-130-srgb_278428.jpg"
  },
  {
    "name": "SSD Kingston NV3 · 1 TB · M.2 NVMe",
    "category": "Armazenamento",
    "price": 799.9,
    "photo": "https://images.kabum.com.br/produtos/fotos/621162/ssd-pcie-kingston-nv3-1-tb-m-2-2280-nvme-leitura-6000-mb-s-e-gravacao-4000-mb-s-snv3s-1000g_1726082185_gg.jpg"
  },
  {
    "name": "Mouse Logitech G203 LIGHTSYNC RGB · Preto",
    "category": "Periféricos",
    "price": 149.9,
    "photo": "https://images.kabum.com.br/produtos/fotos/112948/mouse-gamer-logitech-g203-lightsync-rgb-efeito-de-ondas-de-cores-6-botoes-programaveis-e-ate-8-000-dpi-preto-910-005793_1781792020_gg.jpg"
  },
  {
    "name": "Headset HyperX Cloud III · Preto e vermelho",
    "category": "Periféricos",
    "price": 399.9,
    "photo": "https://images.kabum.com.br/produtos/fotos/467535/headset-gamer-hyperx-cloud-iii-dts-drivers-53mm-usb-pc-ps5-ps4-xbox-series-xis-xbox-one-nintendo-switch-mobile-preto-727aa9aa_1692025823_gg.jpg"
  },
  {
    "name": "Headset HyperX Cloud III Wireless · Preto e vermelho",
    "category": "Periféricos",
    "price": 749.9,
    "photo": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/1007516/xlarge/Headset-Gamer-Wireless-Hyperx-Cloud-Iii-Vermelho-E-Preto-Bateria-De-At-120h_1775693917.jpg"
  },
  {
    "name": "Controle Sony DualSense · Branco",
    "category": "Games",
    "price": 399.9,
    "photo": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/588613/xlarge/Controle-Sony-Dualsense-Sem-Fio-Ps5-Branco_1788545630.jpg"
  },
  {
    "name": "Notebook Acer Nitro V15 · RTX 4050 · Linux",
    "category": "Notebooks",
    "price": 4499.9,
    "photo": "https://images.kabum.com.br/produtos/fotos/1066357/notebook-gamer-acer-nitro-v15-anv15-52-57mc-intel-core-i5-13420h-8gb-ram-ssd-512gb-15-6-fhd-rtx-4050-linux-preto-nh-u1tal-004_1788376786_gg.jpg"
  },
  {
    "name": "Notebook Acer Nitro V15 · RTX 4050 · Windows 11",
    "category": "Notebooks",
    "price": 4899.9,
    "photo": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/986009/xlarge/Notebook-Gamer-Acer-Nitro-V15-Anv15-52-56pd-Intel-Core-i5-13420h-De-13-G-8GB-RAM-RTX4050-SSD-512GB-Tela-15-6-FHD-WINDOWS-11_1791917314.jpg"
  },
  {
    "name": "PC Gamer Black Vulcan · Core i5-12400F · RX 7600",
    "category": "PCs Gamer",
    "price": 4399.9,
    "photo": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/1029926/xlarge/PC-Gamer-Black-Vulcan-i5-12400f-Rx-7600-8GB-Oc-16gb-3200mhz-Water-Cooler-ARGB-Wi-fi-6-Windows-11_1776284010.png"
  }
];
