import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrients-selector',
  templateUrl: './nutrients-selector.component.html',
  styleUrls: ['./nutrients-selector.component.css']
})
export class NutrientsSelectorComponent implements OnInit {
  nutrient: String = "";
  index: number = 0;
  show: Boolean = false;
  nutrientsDeficences: string[][] = [
    [
      'Suelos de pH elevado o bajo',
      'Suelos arenosos o poco densos',
      'Bajo contenido de MO',
      'Condiciones de sequía',
      'Altas precipitaciones(lixiviación) o fuerte irrigación',
      'Adicion o altos niveles de MO o estiércol no descompuestos(ej: paja, podas, etc)'
    ],
    [
      'Suelos ácidos o muy alcalinos (calcáreos)',
      'Bajo contenido de MO',
      'Condiciones de temperaturas frías o humedad',
      'Cultivos con el sistema radicular poco desarrollado',
      'Bajo contenido de fósforo',
      'Alto contenido de hierro'
    ],
    [
      'Suelos de pH bajo (suelos ácidos)',
      'Suelos arenosos o poco densos',
      'Condiciones de sequía',
      'Altas precipitaciones (lixiviación) o fuerte irrigación',
      'Suelos altamente arcillosos (illitas)',
      'Bajo contenido de potasio',
      'Alto contenido de magnesio'
    ],
    [
      'Suelos de pH bajo (suelos ácidos)',
      'Suelos arenosos o poco densos',
      'Suelos con turba ácida',
      'Contenidos elevados de sodio o aluminio'
    ],
    [
      'Suelos arenosos',
      'Suelos de pH bajo (suelos ácidos)',
      'Suelos con altos niveles de potasio',
      'Períodos de frío y humedad'
    ],
    [
      'Suelos de pH bajo (suelos ácidos)',
      'Suelos arenosos o poco densos',
      'Suelos con turba ácida',
      'Contenidos elevados de sodio o aluminio'
    ]
  ];

  nutrientsFacts: string[][] = [
    [
      'Promueve el crecimiento vegetativo',
      'Aumenta el rendimiento y la calidad del grano',
      'Mejora la formación y desarrollo de la espiga'
    ],
    [
      'Mejora el establecimiento del cultivo',
      'Buen desarrollo inicial de la planta',
      'Llenado del grano uniforme',
      'Incremento de la productividad',
      'Adelanta la fecha de cosecha'
    ],
    [
      'Follaje sano y verde',
      'Mejor crecimiento de las raíces',
      'Aumenta el rendimiento'
    ],
    [
      'Follaje sano con apariencia normal',
      'Aumenta el rendimiento y mejora la calidad'
    ],
    [
      'Buen desarrollo inicial de la planta',
      'Aumenta el rendimiento',
      'Adelanta la fecha de cosecha'
    ],
    [
      'Follaje sano con apariencia normal',
      'Aumenta el rendimiento y mejora la calidad'
    ]
  ];



  constructor() { }

  showOrHide(nutrient: String,index: number){
    if(nutrient == ""){
      this.show = false;
    }else{
      this.show = true;
    }
    this.nutrient = nutrient;
    this.index = index;
  }

  ngOnInit(): void {
  }

}
