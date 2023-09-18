import { ColorSystem as palette } from "./ColorSystem";

// prettier-ignore
const lightTheme = {
  colorSet: {
    main:                               palette.Main[40], // #23778e
    main_variant:                       palette.Main[50], // #3191ab
    main_variant2:                      palette.Main[40], // #23778e
    main_variant3:                      palette.Main[40], // #23778e
    main_container:                     palette.Main[90], // #daf5fd
    main_container_variant:             palette.Main[95], // #eafaff

    sub:                                palette.Sub[40], // #405474
    sub_product:                        palette.Sub[40], // #405474
    link:                               "#0A6CFF",
    sub_container:                      palette.Sub[90], // #d8e6fe

    brand:                              palette.Brand[40], // #c00011
    tertiary_a:                         palette.Neutral[100], // #ffffff
    tertiary_b:                         palette.Neutral[95], // #eff1f4
    brand_variant:                      palette.Brand[50], // #fd312e
    brand_container:                    palette.Brand[90], // #ffdad6

    surface:                            palette.Neutral[100], // #ffffff
    surface_variant:                    palette.Neutral[100], // #ffffff
    background:                         palette.Neutral[95], // #eff1f4
    background_variant:                 palette.Neutral[95], // #eff1f4

    error:                              palette.Error[40], // #ee2c00
    error_variant:                      palette.Error[60], // #ff5d30
    normal:                             palette.Green[40], // #016d42
    normal_variant:                     palette.Green[60], // #22a56c
    warning:                            palette.Yellow[80], // #ffca28
    error_container:                    palette.Error[90], // #ffdbc9

    on_main:                            palette.Main[100], // #ffffff
    on_main_container:                  palette.Main[40], // #23778e
    on_sub:                             palette.Sub[100], // #ffffff
    on_sub_container:                   palette.Sub[10], // #051a32
    on_brand:                           palette.Brand[100], // #ffffff
    on_brand_container:                 palette.Brand[10], // #410002

    on_surface:                         palette.Neutral[10], // #111111
    on_surface_variant:                 palette.NeutralVariant[40], // #606c80

    on_error:                           palette.Error[100], // #ffffff
    on_error_container:                 palette.Error[10], // #4d0800

    on_background:                      palette.Neutral[10], // #111111

    outline:                            palette.NeutralVariant[80], // #cad0dd
    noticard1:                          palette.NeutralVariant[80], // #cad0dd
    noticard2:                          palette.NeutralVariant[70], // #a1acbf

    graph:                              palette.TealGreen[70], // #02b3a9
    graph_bar:                          palette.Main[80], // #a8e1f4

    inverse_on_surface:                 palette.Neutral[20], // #2e3133
    scrim:                              palette.Neutral[0], // #000000
    new:                                palette.DeepOrange[60], // #ff5330

    upgradecenter:                      palette.Brand[40], // #c00011

    // 홈 탭
    on_surface_variant2:                palette.NeutralVariant[40], // #606c80

    // 메뉴 탭
    brand_background:                   palette.WarmGrey[95], // #ffdad6

    product: {
      blue:                             palette.Blue[60], // #0397e9
      blue_statusbar:                   "#9ad0f0",
      blue_variant:                     palette.Blue[60], // #0397e9
      green:                            palette.Green[60], // #22a56c
      green_statusbar:                  "#a5d6c3",
      green_variant:                    palette.Green[60], // #22a56c
      yellow:                           palette.Yellow[80], // #eeb404
      yellow_statusbar:                 "#efdb9d",
      yellow_variant:                   palette.Yellow[80], // #eeb404
      orange:                           palette.Orange[60], // #e07400
      orange_statusbar:                 "#eac49c",
      orange_variant:                   palette.Orange[60], // #e07400
      deep_orange:                      palette.DeepOrange[50], // #f93600
      deep_orange_statusbar:            "#f3ad9c",
      deep_orange_variant:              palette.DeepOrange[50], // #f93600
      pink:                             palette.Pink[50], // #db326e
      pink_statusbar:                   "#e8acc4",
      pink_variant:                     palette.Pink[50], // #db326e
      purple:                           palette.Purple[40], // #9a22b2
      purple_statusbar:                 "#d1a6dc",
      purple_variant:                   palette.Purple[40], // #9a22b2

      null:                             palette.Neutral[40], // #5c5f61
      null_statusbar:                   "#babcbf",
      null_variant:                     "#696c6f",

      wheel_main_start:                 "#54aec7",
      wheel_main_end:                   "#23778e",
      wheel_cool_start:                 "#01caff",
      wheel_cool_end:                   "#009bff",
      wheel_warm_start:                 "#fdaf49",
      wheel_warm_end:                   "#f56d41",
      wheel_background:                 "#e0e2e6",

      // 에어컨
      schedule_home:                    palette.WarmGrey[60], // #92918c
      schedule_awake:                   palette.Yellow[80], // #ffca28
      schedule_sleep:                   palette.DeepBlue[60], // #6b88ff
      schedule_away:                    palette.TealGreen[80], // #50dbcf
      schedule_auto:                    palette.Purple[50], // #b642cd
      schedule_off:                     palette.NeutralGrey[60], // #8f9193
      cooling:                          palette.Blue[60], // #4eb2ff
      heating:                          palette.DeepOrange[60], // #ff5330
      hotwater:                         palette.Orange[70], // #ff8b1b

      // 로봇청소기
      map_room_violet:                  palette.Violet[70], // #b19efe
      map_room_pink:                    palette.Pink[80], // #ffb1c3
      map_room_red_brown:               palette.RedBrown[80], // #ffb4a9
      map_room_yellow:                  palette.Yellow[80], // #ffca28
      map_room_teal_green:              palette.TealGreen[80], // #50dbcf
      map_block:                        "#000000",
      map_block_r3:                     "#000000",
      map_room_none:                    palette.NeutralVariant[70], // #a1acbf
      map_selected:                     palette.MainGreen[50], // #3191ab
      map_restricted:                   palette.Error[40], // #dc2900

      maincard_red :                    "#ffdfde",
      maincard_deep_orange :            "#ffe4de",
      maincard_orange :                 "#ffebd7",
      maincard_yellow :                 "#fcf3da",
      maincard_yellow_green :           "#e5eee0",
      maincard_green :                  "#dcf1e8",
      maincard_teal_green :             "#d8efee",
      maincard_main_green :             "#d7ebf0",
      maincard_blue :                   "#d8ebf6",
      maincard_deep_blue :              "#e2e7fc",
      maincard_violet :                 "#e8e4f8",
      maincard_purple :                 "#f1e3f4",
      maincard_pink :                   "#f6e2e8",
      maincard_red_brown :              "#f4e5e3",
    },
  },
};

// prettier-ignore
const darkTheme = {
  colorSet: {
    main:                               "#008098",
    main_variant:                       "#00a0bd",
    main_variant2:                      "#00a0bd",
    main_variant3:                      palette.Neutral[100], // #ffffff
    main_container:                     palette.Main[30], // #155364
    main_container_variant:             palette.Main[20], // #003543

    sub:                                palette.Sub[90], // #d8e6fe
    sub_product:                        "#0a6cff",
    sub_container:                      palette.Sub[20], // #192b46

    brand:                              palette.Brand[90], // #ffdad6
    tertiary_a:                         "#2e3133",
    tertiary_b:                         "#454749",

    brand_container:                    palette.Brand[20], // #690005

    surface:                            palette.Neutral[20], // #2e3133
    surface_variant:                    palette.Neutral[30], // #454749
    background:                         palette.Neutral[0], // #000000
    background_variant:                 "#202020",

    error_variant:                      palette.Error[70], // #ff8c57
    normal:                             palette.Green[60], // #22a56c
    normal_variant:                     palette.Green[70], // #46bf85

    error_container:                    palette.Error[20], // #760e00

    on_main_container:                  palette.Main[80], // #a8e1f4

    on_sub_container:                   palette.Sub[80], // #a8c0e9

    on_brand_container:                 palette.Brand[20], // #ffdad6

    on_surface:                         palette.Neutral[100], // #ffffff
    on_surface_variant:                 palette.NeutralVariant[70], // #a1acbf

    on_error:                           palette.Error[30], // #bb1900
    on_error_container:                 palette.Error[80], // #ffdbc9

    on_background:                      palette.Neutral[100], // #ffffff

    outline:                            palette.NeutralVariant[40], // #606c80
    noticard1:                          palette.NeutralVariant[40], // #606c80
    noticard2:                          palette.NeutralVariant[30], // #a1acbf

    graph_bar:                          palette.Main[40], // #23778e

    inverse_on_surface:                 palette.Neutral[30], // #454749

    upgradecenter:                      palette.Brand[60], // #ff5449

    // 홈 탭
    on_surface_variant2:                palette.NeutralVariant[100], // #ffffff

    // 메뉴 탭
    brand_background:                   "#191b1d",

    product: {
      blue_statusbar:                   "#013654",
      green_statusbar:                  "#0c3c27",
      yellow_statusbar:                 "#564101",
      orange_statusbar:                 "#512a00",
      deep_orange_statusbar:            "#5a1300",
      pink_statusbar:                   "#4f1228",
      purple_statusbar:                 "#380c40",

      null_statusbar:                   "#212223",
      null_variant:                     "#5c5f61",

      wheel_background:                 "#454749",

      // 로봇청소기
      map_block_r3:                     "#ffffff",

      maincard_red :                    "#191b1d",
      maincard_deep_orange :            "#191b1d",
      maincard_orange :                 "#191b1d",
      maincard_yellow :                 "#191b1d",
      maincard_yellow_green :           "#191b1d",
      maincard_green :                  "#191b1d",
      maincard_teal_green :             "#191b1d",
      maincard_main_green :             "#191b1d",
      maincard_blue :                   "#191b1d",
      maincard_deep_blue :              "#191b1d",
      maincard_violet :                 "#191b1d",
      maincard_purple :                 "#191b1d",
      maincard_pink :                   "#191b1d",
      maincard_red_brown :              "#191b1d",
    },
  },
};

export { lightTheme, darkTheme };
