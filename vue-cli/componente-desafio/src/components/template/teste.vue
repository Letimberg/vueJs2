<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app width="320" permanent>
      <v-app-bar class="layout justify-center">PLANEJAH </v-app-bar>

      <v-list color="#1976D2">
        <v-list-item to="/">
          <v-list-icon>
            <v-icon class="white--text">mdi-home</v-icon>
          </v-list-icon>
          <v-list-title class="layout white--text justify-center" link
            >Página Inicial</v-list-title
          >
        </v-list-item>
      </v-list>

      <!-- List Group Maior -->
      <v-list-group
        color="#1976D2"
        :value="true"
        prepend-icon="mdi-invert-colors"
        v-for="{ name, programs } in projects"
        :key="name"
        link
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title> {{ name }} </v-list-item-title>
          </v-list-item-content>
        </template>

        <!-- List Group Medio -->
        <v-list-group
          no-action
          sub-group
          prepend-icon="mdi-invert-colors"
          v-for="{ name, actions } in programs"
          :key="name"
          link
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-title>
                {{ name }}
              </v-list-title>
            </v-list-item-content>
          </template>

          <!-- List Group Menor  -->
          <v-list-group
            v-for="{ description: name, steps } in actions"
            :key="name"
            link
          >
            <template v-slot:activator>
              <v-liss-item-content>
                <v-list-title>
                  {{ name }}
                </v-list-title>
              </v-liss-item-content>
            </template>

            <v-list-item
            to="/programs"
              v-for="{ description: name } in steps"
              :key="name"
              link
            >
              <template>
                <v-list-item-content>
                  <v-list-title>
                    {{ name }}
                  </v-list-title>
                </v-list-item-content>
              </template>

              <v-list-item-icon>
                <v-icon>mdi-plus-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <!-- Fim List Group Menor -->
        </v-list-group>
        <!-- Fim List Group Medio -->
      </v-list-group>
      <!-- Fim List Group Maior -->

      <!-- Sobre -->

      <v-list>
        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Sobre</v-list-item-title>
        </v-list-item>
      </v-list>

      <!-- Sair -->
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Sair</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      projects: [
        {
          name: "Programas",
          icon: "mdi-invert-colors",

          programs: [
            {
              name: "Hemoce Feliz",
              actions: [
                {
                  description: "Projetos",
                  steps: [
                    {
                      description: "Educação para a Vida",
                    },
                  ],
                },
              ],
            },
            {
              name: "Hemoce Inovador",
              actions: [
                {
                  description: "Ação do programa",
                  steps: [
                    {
                      description: "Adicionar",
                    },
                  ],
                },
              ],
            },
            {
              name: "Hemoce Para Todos",
              actions: [
                {
                  description: "Ação do programa",
                  steps: [
                    {
                      description: "Adicionar",
                    },
                  ],
                },
              ],
            },
            {
              name: "Hemoce Sustentável",
              actions: [
                {
                  description: "Ações dos programas",
                  steps: [
                    {
                      description: "Adicionar",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

      