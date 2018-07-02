
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   myStyle: object = {};
   myParams: object = {};
   width = 100;
   height = 100;

  ngOnInit() {
    this.myStyle = {
      position: 'absolute',
      display: 'block',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 70,
          density: {
            enable: !0,
            value_area: 1200
          }
        },
        color: {
          value: '#6610f2'
        },
        shape: {
          type: 'polygon',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 6
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: !1,
          anim: {
            enable: !1,
            speed: 1,
            opacity_min: 0.1,
            sync: !1
          }
        },
        size: {
          value: 2.5,
          random: !0,
          anim: {
            enable: !1,
            speed: 40,
            size_min: 0.1,
            sync: !1
          }
        },
        line_linked: {
          enable: !0,
          distance: 200,
          color: '#ffffff',
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: !0,
          speed: 6,
          direction: 'none',
          random: !1,
          straight: !1,
          out_mode: 'out',
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: !0,
            mode: 'grab'
          },
          onclick: {
            enable: !0,
            mode: 'push'
          },
          resize: !0
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: !0
    };
  }
}
