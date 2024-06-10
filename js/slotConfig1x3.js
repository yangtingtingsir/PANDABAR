// 1x3 1 line (shopping slot)
var slotConfig1x3 = {
    slotTextColor : 0x7f7b88,           // text color

    symbolSizeY: 154, 
    spinTime: 2000,                     // time, milliseconds
    winShowTime: 3000,                  // time, milliseconds
    showWinCoinsMessage : false,        // displaying a message with the amount of money won
    winMessageTime: 2000,               // win message show time
    minWin : 200,                       // min win coins to show big, mega, huge popup - not used
    useBigWinCongratulation : false,    // to show big, mega, huge popup - not used

    symbAnimFrameRate: 24,      // symbols animation frame rate
    frameWidth : 174,           // frame width
    frameHeight : 174,          // frame height

    lineColor : 0xFFEA31,       // line color

    lineBetMaxValue: 10,        // slot line bet maxvalue
    useWild: true,              // use wild flag, wild can be substitute for any symbol to create winning combinations (exclude first reel)
    wild: 'Wild',               // wild symbol name
    useScatter: false,          // use scatter flag
    scatter: null,              // scatter symbol name 'Scatter'
    selectedLines: 'all',       //'all' / 'first' - selectad lines at start

    useWildInFirstPosition: false,              // substitute of the first symbol not allowed
    useLineBetMultiplier: true,                 // win multiplied by bet
    useLineBetFreeSpinMultiplier: false,        // free spins win multiplied by bet
    defaultCoins: 100000,                       // default player credit 100 000

    localOffsetX: 0,                            // x offset from center for all scene objects
    localOffsetY: 70,                           // y offset from center for all scene objects

    lineBetPrefix: 'BET X',
    winAmountPrefix: 'YOUR WIN:   ',
    freeSpinsAmountPrefix: 'FREE:   ',

    infoTextClickSpin: 'CLICK TO SPIN TO START!',
    infoTextSelectLine: 'SELECT ANY SLOT LINE!',  // not used
    
    fonts: [
        {
            fontName: 'gameFont_0',
            filePNG:  'fonts/MontserratB_48_0.png',
            fileXML:  'fonts/MontserratB_48_r.xml'
        },
        /*
        {
            fontName: 'gameFont_1',
            filePNG:  'fonts/MontserratB_60_1.png',
            fileXML:  'fonts/MontserratB_60_1.xml'
        },
        */
        {
            fontName: 'gameFont_2',
            filePNG:  'fonts/MontserratB_48_r.png',
            fileXML:  'fonts/MontserratB_48_r.xml'
        },
        {
            fontName: 'gameFont_3',
            filePNG:  'fonts/MontserratB_48_w.png',
            fileXML:  'fonts/MontserratB_48_w.xml'
        },
    ],

    sprites: [
        // debug reference
        {
            fileName: null,
            name: 'debugreference'
        },

        // common sprites 
        {
            fileName: 'SlotMachine_1x3.png',
            name: 'slot'
        },
        {
            fileName: 'Plant.png',
            name: 'plant'
        },
        {
            fileName: 'Balloons.png',
            name: 'balloons'
        },
        {
            fileName: 'Arrow.png',
            name: 'arrow'
        },
        {
            fileName: 'ShadowTop.png',
            name: 'shadowtop'
        },
        {
            fileName: 'ShadowBottom.png',
            name: 'shadowbot'
        },
        {
            fileName: null,
            name: 'paneljackpot'
        },
        {
            fileName: null,
            name: 'handle'
        },
        {
            fileName: null,
            name: 'handle_ball'
        },
        {
            fileName: null,
            name: 'button_plus'
        },
        {
            fileName: null,
            name: 'button_plus_hover'
        },
        {
            fileName: null,
            name: 'button_minus'
        },
        {
            fileName: null,
            name: 'button_minus_hover'
        },
        {
            fileName: 'LampOff.png',
            name: 'lamp_off'
        },
        {
            fileName: 'LampOn.png',
            name: 'lamp_on'
        },
        {
            fileName: 'SpotTop.png',
            name: 'spot_top'
        },
        {
            fileName: 'SpotBottom.png',
            name: 'spot_bottom'
        },
        {
            fileName: null,
            name: 'panel_totalbet'
        },
        {
            fileName: 'PanelWin.png',
            name: 'panel_win'
        },
        {
            fileName: null,
            name: 'panel_lines'
        },
        {
            fileName: null,
            name: 'panel_balance'
        },
        {
            fileName: null,
            name: 'panel_menu'
        },
        {
            fileName: null,
            name: 'button_lines'
        },
        {
            fileName: null,
            name: 'button_lines_hover'
        },
        {
            fileName: null,
            name: 'button_maxbet'
        },
        {
            fileName: null,
            name: 'button_maxbet_hover'
        },
        {
            fileName: 'ButtonSpin.png',
            name: 'button_spin'
        },
        {
            fileName: 'ButtonSpinHover.png',
            name: 'button_spin_hover'
        },
        {
            fileName: null,
            name: 'button_autospin'
        },
        {
            fileName: null,
            name: 'button_autospin_hover'
        },
        {
            fileName: null,
            name: 'line_button'
        },
        {
            fileName: null,
            name: 'line_button_hover'
        },
        {
            fileName: 'ButtonBet.png',
            name: 'button_betloop'
        },
        {
            fileName: 'ButtonBetHover.png',
            name: 'button_betloop_hover'
        },
        // common gui sprites 
        {
            fileName: 'ButtonMenu.png',
            name: 'button_menu'
        },
        {
            fileName: 'ButtonMenuHover.png',
            name: 'button_menu_hover'
        },
        {
            fileName: 'ButtonInfo.png',
            name: 'button_info'
        },
        {
            fileName: 'ButtonInfoHover.png',
            name: 'button_info_hover'
        },
        {
            fileName: 'ButtonSettings.png',
            name: 'button_settings'
        },
        {
            fileName: 'ButtonSettingsHover.png',
            name: 'button_settings_hover'
        },
        {
            fileName: 'ButtonRules.png',
            name: 'button_rules'
        },
        {
            fileName: 'ButtonRulesHover.png',
            name: 'button_rules_hover'
        },
        {
            fileName: 'gui/ButtonOn.png',
            name: 'button_on'
        },
        {
            fileName: 'gui/ButtonOff.png',
            name: 'button_off'
        },
        {
            fileName: 'gui/MessagePanel.png',
            name: 'message_panel'
        },   
        {
            fileName: 'gui/AboutPanel.png',
            name: 'about_panel'
        }, 
        {
            fileName: null,
            name: 'about_title'
        }, 
        {
            fileName: 'gui/SettingsPanel.png',
            name: 'settings_panel'
        }, 
        {
            fileName: null,
            name: 'freespin_panel'
        }, 
        {
            fileName: null,
            name: 'freespin_title'
        },
        {
            fileName: null,
            name: 'freespin_title'
        }, 
        {
            fileName: null,
            name: 'bigwin_panel'
        }, 
        {
            fileName: null,
            name: 'bigwin_title'
        }, 
        {
            fileName: null,
            name: 'hugewin_panel'
        }, 
        {
            fileName: null,
            name: 'hugewin_title'
        },
        {
            fileName: null,
            name: 'megawin_panel'
        }, 
        {
            fileName: null,
            name: 'megawin_title'
        },
        {
            fileName: null,
            name: 'settings_title'
        },
        {
            fileName: null,
            name: 'help_title'
        },
        {
            fileName: 'gui/Logo.png',
            name: 'logo'
        }, 
        {
            fileName: 'gui/ExitButton.png',
            name: 'exit_button'
        }, 
        {
            fileName: 'gui/ExitButtonHover.png',
            name: 'exit_button_hover'
        },   
        {
            fileName: 'gui/MiddleButton.png', 
            name: 'middle_button'
        }, 
        {
            fileName: 'gui/MiddleButtonHover.png', 
            name: 'middle_button_hover'
        },   
        {
            fileName: 'gui/LongButton.png', 
            name: 'long_button'
        }, 
        {
            fileName: 'gui/LongButtonHover.png', 
            name: 'long_button_hover'
        }, 
        {
            fileName: null, 
            name: 'extralong_button'
        }, 
        {
            fileName: null, 
            name: 'extralong_button_hover'
        },
        {
            fileName: 'gui/InfoPanel.png', 
            name: 'info_panel'
        },   
        {
            fileName: null, 
            name: 'jackpotwin_panel'
        },   
        {
            fileName: null, 
            name: 'jackpotwin_title'
        }, 
        {
            fileName: 'gui/popUpBkg.png', 
            name: 'pu_background'
        },   
        {
            fileName: 'gui/NextButtonHover.png', 
            name: 'next_button_hover'
        },
        {
            fileName: 'gui/NextButton.png', 
            name: 'next_button'
        },  
        {
            fileName: 'gui/PrevButtonHover.png', 
            name: 'prev_button_hover'
        },   
        {
            fileName: 'gui/PrevButton.png', 
            name: 'prev_button'
        },      
        {
            fileName: null, 
            name: 'symbol_plate'
        },   
        {
            fileName: null, 
            name: 'specsymbol_plate'
        },   
        {
            fileName: null, 
            name: 'navi_dot'
        },    
        {
            fileName: null, 
            name: 'navi_dot_active'
        },    
    ],

    symbols:
    [
        {
            fileName: 'Can.png',                      // filename or null
            fileNameGUI: 'Can.png',                // gui image, filename or null
            name: 'Can',                              // sprite name
            fileNameBlurred: 'CanBlurred.png',        // blurry symbol file name, folder png/SymbolsBlurred
            animation: 'CanSheet.png',                // animation sheet file name, folder png/SymbolsSheet
            useWildSubstitute: true                   // use wild substitute for the symbol
        },
        {
            fileName: 'Burger.png',    
            fileNameGUI: 'Burger.png',
            name: 'Burger',
            fileNameBlurred: 'BurgerBlurred.png', 
            animation: 'CanSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'IceCream.png',   
            fileNameGUI: 'IceCream.png',
            name: 'IceCream',
            fileNameBlurred: 'IceCreamBlurred.png', 
            animation: 'CanSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Fries.png',     
            fileNameGUI: 'Fries.png',
            name: 'Fries',
            fileNameBlurred: 'FriesBlurred.png', 
            animation: 'CanSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: '1Bar.png',     
            fileNameGUI: '1Bar.png',     
            name: '1Bar',                   
            fileNameBlurred: '1BarBlurred.png', 
            animation: 'CanSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: '2Bar.png',        
            fileNameGUI: '2Bar.png',
            name: '2Bar',
            fileNameBlurred: '2BarBlurred.png', 
            animation: 'CanSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: '3Bar.png',       
            fileNameGUI: '3Bar.png',
            name: '3Bar',
            fileNameBlurred: '3BarBlurred.png', 
            animation: 'CanSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Bell.png',    
            fileNameGUI: 'Bell.png',
            name: 'Bell',
            fileNameBlurred: 'BellBlurred.png', 
            animation: 'CanSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Seven.png',    
            fileNameGUI: 'Seven.png',
            name: 'Seven',
            fileNameBlurred: 'SevenBlurred.png', 
            animation: 'CanSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Bonus.png',      
            fileNameGUI: 'Bonus.png',
            name: 'Bonus',
            fileNameBlurred: 'BonusBlurred.png', 
            animation: 'CanSheet.png',
            useWildSubstitute: false
        },
        {
            fileName: 'Wild.png',        
            fileNameGUI: 'Wild.png',
            name: 'Wild',
            fileNameBlurred: 'WildBlurred.png', 
            animation: 'CanSheet.png',
            useWildSubstitute: false
        },
/*
        {
            fileName: null,          
            name: 'Scatter',                   
            fileNameBlurred: 'ScatterBlurred.png', 
            animation: 'ScatterSheet.png',
            useWildSubstitute: false
        },

        {
            fileName: null,          
            name: 'Jackpot',                   
            fileNameBlurred: 'JackpotBlurred.png', 
            animation: 'JackpotSheet.png',
            useWildSubstitute: false
        }
*/
    ],

    reels:[
         {//0
            symbolImages: ['Burger',  'Can', 'IceCream', 'Fries', 'Burger', 'Can', '1Bar', '2Bar', '3Bar', 'Bell', 'Seven', 'Bonus', 'Can', 'Burger'],     
            offsetX: -174,
            offsetY: -43,
            windowImage: 'reel',        // not used
            windowsCount: 1,    
            addSpinTime: 100, // additional spin time for reel milliseconds   
            spinDeformX: -10,
        },
        { // 1
            symbolImages: ['3Bar', 'Wild', 'IceCream', 'Wild', '1Bar', 'Wild', 'Burger', 'Wild', 'Can', 'Fries', 'Wild',  '2Bar',  'Bell', 'Can', 'Seven', 'Wild',  'Bonus', 'Wild','Can'],   
            offsetX: 0,
            offsetY: -43,
            windowImage: 'reel',        // not used
            windowsCount: 1,
            addSpinTime: 200, // additional spin time for reel milliseconds   
            spinDeformX: 0,
        },
        { // 2
            symbolImages: ['Bonus', 'Wild', 'Can', '3Bar', 'Burger', 'Wild', '2Bar', 'IceCream', 'Wild', 'Fries', 'Wild', '1Bar',  'Can', 'Wild', 'Bell', 'Seven',  'Wild', 'Can'],   // 14
            offsetX: 174,
            offsetY: -43,
            windowImage: 'reel',        // not used
            windowsCount: 1,
            addSpinTime: 300, // additional spin time for reel milliseconds     
            spinDeformX: 10,
        }     
    ],

    // reels_simulate: [0, 0, -1],    // -1 - avoid reel simulate

    // reels_simulate: [11, 16, 0],   // bonus win

    payLines:[
        {
            line: ['Can', 'Can', 'Can'],
            pay: 1,
            freeSpins: 0
        },
        {
            line: ['Burger', 'Burger', 'Burger'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['IceCream', 'IceCream', 'IceCream'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Fries', 'Fries', 'Fries'],
            pay: 4,
            freeSpins: 0
        },
        {
            line: ['1Bar', '1Bar', '1Bar'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['2Bar', '2Bar', '2Bar'],
            pay: 12,
            freeSpins: 0
        },
        {
            line: ['3Bar', '3Bar', '3Bar'],
            pay: 13,
            freeSpins: 0
        },
        {
            line: ['Bell', 'Bell', 'Bell'],
            pay: 14,
            freeSpins: 0
        },
        {
            line: ['Seven', 'Seven', 'Seven'],
            pay: 15,
            freeSpins: 0
        },
        {
            line: ['Bonus', 'Bonus', 'Bonus'],
            pay: 0,
            freeSpins: 3
        },
    ],
    
    // not used
    scatterPayTable:[
        {
            scattersCount: 5,
            pay: 0,
            freeSpins: 5
        }
    ],
    
    // jackpot settings - not used
    jackpot:
        {
            symbolName: null,
            symbolsCount: 3,
            defaultAmount: 1000,        // coins amout at start
            increaseValue: 1,           // jackpot increment after spin
        },

    createSlotGraphic: function(scene){
        // scene.background =  scene.addSpriteLocPos('background', 0, 0); //?.setScale(1.5);
        // scene.background.depth = -5;

        scene.debugreference =  scene.addSpriteLocPos('debugreference', 0, -70); //?.setScale(1.5);
        scene.debugreference.depth = 2000;
        scene.debugreference.setAlpha(0.0);
/**/


         scene.balloonsleft =  scene.addSpriteLocPos('balloons', -475, 260).setOrigin(0.5, 1); 
         scene.balloonsleft.depth = -1;
         scene.balloonsright =  scene.addSpriteLocPos('balloons', 475, 260).setScale(-1, 1).setOrigin(0.5, 1);   
         scene.balloonsright.depth = -1;

         scene.slot =  scene.addSpriteLocPos('slot', 0, -98); 
         scene.slot.depth = -1;

        // lamps
        var lampsPos = [0,-502]; // [-56,-463, -40,-463, -24,-463,  -8,-463,  8,-463,  24,-463, 40,-463, 56,-463,  -105,-464, -86,-463, 86,-463, 105,-464];

        scene.lampsArray = []; 
        for(var li = 0; li < lampsPos.length / 2; li++)
        {
            var lampName = 'lamp'+ li;
            scene[lampName] = new Lamp (scene, lampsPos[li * 2], lampsPos[li * 2 + 1], 'lamp_off', 'lamp_on'); 
            scene.lampsArray.push(scene[lampName]);
            scene[lampName].depth = 1;
            scene[lampName].on();
        }
        scene.spotTop = new Lamp (scene, 0, -370, 'lamp_off', 'spot_top'); 
        scene.lampsArray.push(scene.spotTop);
        scene.spotTop.depth = 1;
        scene.spotTop.on();

        scene.spotBottom = new Lamp (scene, 0, 280, 'lamp_off', 'spot_bottom'); 
        scene.lampsArray.push(scene.spotBottom);
        scene.spotBottom.depth = 1;
        scene.spotBottom.on();


         scene.shadowtop =  scene.addSpriteLocPos('shadowtop', 0, -152); 
         scene.shadowtop.setAlpha(0.2);
         scene.shadowtop.depth = 1;
         scene.shadowbot =  scene.addSpriteLocPos('shadowbot', 0, 76); 
         scene.shadowbot.setAlpha(0.2);
         scene.shadowbot.depth = 1;

         // scene.paneljp =  scene.addSpriteLocPos('paneljackpot', 0, -450);    
         scene.vaseleft =  scene.addSpriteLocPos('plant', -470, 270);  
         scene.vaseright =  scene.addSpriteLocPos('plant', 470, 270).setScale(-1, 1);  

         scene.arrowleft =  scene.addSpriteLocPos('arrow', -330, -40); 
         scene.arrowleft.depth = 1;
         scene.arrowright =  scene.addSpriteLocPos('arrow', 330, -40).setScale(-1, 1);   
         scene.arrowright.depth = 1;
    },

    createReels: function(scene) {
        var _reels = [];
        for(var ri = 0; ri < this.reels.length; ri++)
        {
            _reels.push(new Reel(scene, this.reels[ri], ri, this.symbolSizeY, this.reels[ri].windowsCount, true, this.spinTime, this.symbAnimFrameRate, this.symbolSizeY * 1.2, this.symbolSizeY * 2.12));
        }
        return _reels;
    },

    createControls: function(scene, slotControls) {
        let depth = 11;

        // totalbet minus button
        /*
        slotControls.totalBetMinusButton = new SceneButton(scene, 'button_minus','button_minus_hover', false);   
        slotControls.buttons.push(slotControls.totalBetMinusButton);
        slotControls.totalBetMinusButton.create(-442-95, 196 + 220, 0.5, 0.5);
        slotControls.totalBetMinusButton.addClickEvent(slotControls.lineBetMinus_Click, slotControls);
        slotControls.totalBetMinusButton.setDepth(depth); 
        */

        // totalbet plus button
        /*
        slotControls.totalBetPlusButton = new SceneButton(scene, 'button_plus','button_plus_hover', false);   
        slotControls.buttons.push(slotControls.totalBetPlusButton);
        slotControls.totalBetPlusButton.create(-442 + 92, 196 + 220, 0.5, 0.5);
        slotControls.totalBetPlusButton.addClickEvent(slotControls.lineBetPlus_Click, slotControls);
        slotControls.totalBetPlusButton.setDepth(depth); 
        */
       
        // totalbet loop button
        slotControls.totalBetPlusButton = new SceneButton(scene, 'button_betloop','button_betloop_hover', false);   
        slotControls.buttons.push(slotControls.totalBetPlusButton);
        slotControls.totalBetPlusButton.create(0, -15 + 220, 0.5, 0.5);
        slotControls.totalBetPlusButton.addClickEvent(slotControls.lineBetLoop_Click, slotControls);
        slotControls.totalBetPlusButton.setDepth(depth); 

        // panels
        slotControls.winPanel = scene.addSpriteLocPos('panel_win', 0, -590 + 220); 
        slotControls.winPanel.setDepth(depth); 

        // panels - not used
        // slotControls.linesPanel = scene.addSpriteLocPos('panel_lines', -738, 196 + 220); 
        // slotControls.linesPanel.setDepth(depth); 
        // slotControls.totalbetPanel = scene.addSpriteLocPos('panel_totalbet', -442, 196 + 220);
        // slotControls.totalbetPanel.setDepth(depth); 
        // slotControls.balancePanel = scene.addSpriteLocPos('panel_balance', 708, 196 + 220); 
        // slotControls.balancePanel.setDepth(depth); 
        // slotControls.menuPanel = scene.addSpriteLocPos('panel_menu', -730, -230); 
        // slotControls.menuPanel.setDepth(depth); 
        // slotControls.menuPanel.setVisible(false);

        // maxbet button - not used
        // slotControls.slotMaxBetButton = new SceneButton(scene, 'button_maxbet', 'button_maxbet_hover', false);   
        // slotControls.buttons.push(slotControls.slotMaxBetButton);
        // slotControls.slotMaxBetButton.create(-170, 210 + 200, 0.5, 0.5);
        // slotControls.slotMaxBetButton.addClickEvent(slotControls.maxBet_Click, slotControls);     
        // slotControls.slotMaxBetButton.setDepth(depth); 
         
        
        // autoSpin button
        /*
        slotControls.slotAutoSpinButton = new SceneButton(scene, 'long_button', 'long_button_hover', true); 
        slotControls.buttons.push(slotControls.slotAutoSpinButton);
        slotControls.slotAutoSpinButton.create(163, 210 + 200, 0.5, 0.5);
        slotControls.slotAutoSpinButton.button.setVisible(true);   
        slotControls.changeAutoSpinModeEvent.add((autoSpin)=>
        {
            if (!autoSpin)
            {
                slotControls.slotAutoSpinButton.release();
            }
        }, this);
        slotControls.slotAutoSpinButton.setDepth(depth); 
        */

        // spin button
        slotControls.slotSpinButton = new SpinButton(scene, 'button_spin', 'button_spin_hover', false);   
        slotControls.buttons.push(slotControls.slotSpinButton);
        slotControls.slotSpinButton.create(0, 170 + 200, 0.5, 0.5);    
        slotControls.slotSpinButton.clickEvent.add(scene.handleAnimation, scene);  
        slotControls.slotSpinButton.setDepth(depth); 

        // sound button
        //slotControls.soundButton = new SceneButton(scene, 'button_on', 'button_off', true);   
        //slotControls.buttons.push(slotControls.soundButton);
        //slotControls.soundButton.create(-860, -300, 0.5, 0.5);
        //slotControls.soundButton.addClickEvent(()=>{scene.soundController.soundOn(!scene.soundController._soundOn);}, scene);
        //slotControls.soundButton.button.setVisible(true); 

        // lines loop button
        // slotControls.slotLinesLoopButton = new SceneButton(scene, 'button_lines', 'button_lines_hover', false);   
        // slotControls.buttons.push(slotControls.slotLinesLoopButton);
        // slotControls.slotLinesLoopButton.create(-360, 225, 0.5, 0.5);
        // slotControls.slotLinesLoopButton.addClickEvent(slotControls.linesLoop_Click, slotControls);

        // menu button
        slotControls.menuButton = new SceneButton(scene, 'button_menu', 'button_menu_hover', true);   
        slotControls.buttons.push(slotControls.menuButton);
        slotControls.menuButton.create(-730, -360, 0.5, 0.5);
        slotControls.menuButton.addClickEvent(()=>{ 
            console.log('menu click');
            slotControls.settingsButton.button.setVisible(!slotControls.settingsButton.button.visible);  
            slotControls.rulesButton.button.setVisible(!slotControls.rulesButton.button.visible); 
            if(slotControls.menuPanel != null) slotControls.menuPanel.setVisible(!slotControls.menuPanel.visible);
            scene.soundController.playClip('button_click');}, this);
        slotControls.menuButton.button.setVisible(true); 
        slotControls.menuButton.setDepth(depth); 

        // settings button
        slotControls.settingsButton = new SceneButton(scene, 'button_settings', 'button_settings_hover', false);   
        slotControls.buttons.push(slotControls.settingsButton);
        slotControls.settingsButton.create(-730, -260, 0.5, 0.5);
        slotControls.settingsButton.addClickEvent(()=>{ 
            console.log('settings click');
            var pu = scene.guiController.showPopUp(this.createSettingsPUHandler);
            scene.soundController.playClip('button_click');}, this);
        slotControls.settingsButton.button.setVisible(false);  
        slotControls.settingsButton.setDepth(depth); 

       // rules button
       slotControls.rulesButton = new SceneButton(scene, 'button_rules', 'button_rules_hover', false);   
       slotControls.buttons.push(slotControls.rulesButton);
       slotControls.rulesButton.create(-730, -160, 0.5, 0.5);
       slotControls.rulesButton.addClickEvent(()=>{
           var pu = scene.guiController.showPopUp(this.createInfoPUHandler);
           scene.soundController.playClip('button_click');
       }, this);   
       slotControls.rulesButton.button.setVisible(false); 
       slotControls.rulesButton.setDepth(depth); 

       // info button
       slotControls.slotInfoButton = new SceneButton(scene, 'button_info', 'button_info_hover', false);   
       slotControls.buttons.push(slotControls.slotInfoButton);
       slotControls.slotInfoButton.create(-730, -60, 0.5, 0.5);
       slotControls.slotInfoButton.addClickEvent(()=>{
            console.log('info click');
           var pu = scene.guiController.showPopUp(this.createAboutPUHandler);
           scene.soundController.playClip('button_click');
       }, this);   
       slotControls.slotInfoButton.button.setVisible(false); 
       slotControls.slotInfoButton.setDepth(depth); 

        // adding the text fields
        slotControls.linesText = scene.add.bitmapText(scene.centerX - 738, scene.centerY + 125 + 220, 'gameFont_2', 'LINES', 30, 1).setOrigin(0.5);
        slotControls.linesText.depth = depth;
        slotControls.linesText.setVisible(false);
        slotControls.linesCountText = scene.add.bitmapText(scene.centerX - 738, scene.centerY + 178 + 220, 'gameFont_2', slotControls.selectedLinesCount, 42, 1).setOrigin(0.5);
        slotControls.linesCountText.depth = depth;
        slotControls.linesCountText.setVisible(false);

        slotControls.lineBetAmountText = scene.add.bitmapText(scene.centerX, scene.centerY - 22 + 220, 'gameFont_3', this.lineBetPrefix + slotControls.lineBet, 29, 1).setOrigin(0.5);
        slotControls.lineBetAmountText.depth = depth;
        //slotControls.lineBetAmountText.setVisible(false);
 
        slotControls.totalBetText = scene.add.bitmapText(scene.centerX - 442, scene.centerY + 125 + 220, 'gameFont_2', 'TOTAL  BET', 30, 1).setOrigin(0.5);
        slotControls.totalBetText.depth = depth;
        slotControls.totalBetText.setVisible(false);
  
        slotControls.totalBetSumText = scene.add.bitmapText(scene.centerX - 442, scene.centerY + 178 + 220, 'gameFont_2', slotControls.getTotalBet(), 42, 1).setOrigin(0.5);
        slotControls.totalBetSumText.depth = depth;
        slotControls.totalBetSumText.setVisible(false);
 
        slotControls.creditText = scene.add.bitmapText(scene.centerX + 0, scene.centerY - 518 , 'gameFont_0', 'BALANCE', 18, 1).setOrigin(0.5);
        slotControls.creditText.tint = 0x4e4a56;
        slotControls.creditText.depth = depth;

        slotControls.creditSumText = scene.add.bitmapText(scene.centerX + 0, scene.centerY - 497, 'gameFont_2', '' + scene.slotPlayer.coins, 36, 1).setOrigin(0.5);
        slotControls.creditSumText.depth = depth;
         
        // slotControls.winText = scene.add.bitmapText(scene.centerX - 70, scene.centerY - 370, 'gameFont_2', 'YOUR  WIN:', 36, 1).setOrigin(0.5);
        // slotControls.winText.depth = depth;

        slotControls.winAmountText = scene.add.bitmapText(scene.centerX, scene.centerY - 370, 'gameFont_2', '0', 36, 1).setOrigin(0.5);
        slotControls.winAmountText.depth = depth;

        slotControls.jackpotAmountText = scene.add.bitmapText(scene.centerX + 0, scene.centerY - 687 + 220, 'gameFont_2', '0', 42, 1).setOrigin(0.5);
        slotControls.jackpotAmountText.depth = depth;
        slotControls.jackpotAmountText.setVisible(false);

        slotControls.autoSpinText = scene.add.bitmapText(scene.centerX + 212, scene.centerY + 200 + 200, 'gameFont_3', 'AUTO', 42, 1).setOrigin(0.5);
        slotControls.autoSpinText.setLetterSpacing(1);
        slotControls.autoSpinText.depth = depth;
        slotControls.autoSpinText.setVisible(false);

        slotControls.maxBetText = scene.add.bitmapText(scene.centerX - 215, scene.centerY + 187 + 200, 'gameFont_3', 'MAX BET', 42, 1).setOrigin(0.5);
        slotControls.maxBetText.setLetterSpacing(1);
        slotControls.maxBetText.depth = depth;
        slotControls.maxBetText.setVisible(false);
        
        slotControls.spinText = scene.add.bitmapText(scene.centerX - 0, scene.centerY + 207 + 200, 'gameFont_3', 'SPIN', 130, 1).setOrigin(0.5);
        slotControls.spinText.depth = depth;
        slotControls.spinText.setVisible(false);

        slotControls.infoText = scene.add.bitmapText(scene.centerX, scene.centerY - 370, 'gameFont_2', 'info', 33, 1).setOrigin(0.5);
        slotControls.infoText.depth = depth;

        slotControls.freeSpinCountText = scene.add.bitmapText(scene.centerX, scene.centerY - 370, 'gameFont_2', '99', 36, 1).setOrigin(0.5); 
        slotControls.freeSpinCountText.depth = depth;

        // slotControls.freeSpinText = scene.add.bitmapText(scene.centerX - 70, scene.centerY - 370, 'gameFont_2', 'FREE:', 36, 1).setOrigin(0.5); 
        // slotControls.freeSpinCountText.setVisible(false);
        // slotControls.freeSpinText.depth = depth;
    },
   
    createInfoPUHandler: function(popup)
    {
        function createSymbolPlate5x (popup, parentContainer, symbSpriteName, posX, posY, price3x,price4x, price5x)
        {
            let symbContainer = popup.scene.add.container(posX, posY);
            parentContainer.add(symbContainer);
            let symbIcon = popup.scene.add.sprite(-140, 0, symbSpriteName).setOrigin(0.5).setScale(0.8);
            symbContainer.add(symbIcon);
    
            let textXPos = -20;
            let text3x = popup.scene.add.bitmapText(textXPos, 48, 'gameFont_2', '3X - ' + price3x, 40, 1).setOrigin(0, 0.5);
            text3x.tint = 0x4f2930;
            symbContainer.add(text3x);
    
            let text4x = popup.scene.add.bitmapText(textXPos, 0, 'gameFont_2', '4X - ' + price4x, 40, 1).setOrigin(0, 0.5);
            text4x.tint = 0x4f2930;
            symbContainer.add(text4x);

            let text5x = popup.scene.add.bitmapText(textXPos, -48, 'gameFont_2', '5X - ' + price5x, 40, 1).setOrigin(0, 0.5);
            text5x.tint = 0x4f2930;
            symbContainer.add(text5x);
        };

        function createSymbolPlate3x (popup, parentContainer, symbSpriteName, posX, posY, price3x)
        {
            let symbContainer = popup.scene.add.container(posX, posY);
            parentContainer.add(symbContainer);
            let symbIcon = popup.scene.add.sprite(-50, 0, symbSpriteName).setOrigin(1, 0.5).setScale(0.8);
            symbContainer.add(symbIcon);
    
            let textXPos = -20;
            let text3x = popup.scene.add.bitmapText(textXPos, 0, 'gameFont_2', '3X - ' + price3x, 29, 1).setOrigin(0, 0.5);
            // text4x.tint = 0x4f2930;
            symbContainer.add(text3x);
        };

        function createSpecSymbolPlate(popup, parentContainer, symbSpriteName, posX, posY, info)
        {
            let symbContainer = popup.scene.add.container(posX, posY);
            parentContainer.add(symbContainer);
            let symbIcon = popup.scene.add.sprite(0, 0, symbSpriteName).setOrigin(0.5, 0.5).setScale(1.0);
            symbContainer.add(symbIcon);
    
            let textInfo = popup.scene.add.bitmapText(120, 0, 'gameFont_0', info, 29, 0).setOrigin(0, 0.5);
            textInfo.tint  = 0x7f7b88;
            symbContainer.add(textInfo);
        };
    
        function refreshInfoPu (containers, selectors, index)
        {
            for(let i = 0; i < containers.length; i++)
            {
                containers[i].visible = (index === i);
                if(popup.scene.textures.exists('navi_dot_active') && popup.scene.textures.exists('navi_dot'))
                {
                    selectors[i].setTexture((index === i) ? 'navi_dot_active' : 'navi_dot');
                }
            }
        };

        let index = 0;
        let containers = [];
        let selectors = [];
        let offsetY = -150;

        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + offsetY, 'pu_background').setOrigin(0.5).setScale(1, 1.05);
        backGround.setInteractive(); // block bottom controls
        // backGround.setAlpha(0.05);
        // backGround.tint = 0x262a3a;
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, 22 + offsetY, 'info_panel').setOrigin(0.5);
        popup.add(panel);

        // let title = popup.scene.add.sprite(2, -375 + offsetY, 'help_title').setOrigin(0.5);
        // popup.add(title);

        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 625, -265 + offsetY);
        popup.addButton('nextButton','next_button', 'next_button_hover', false, 580, 300 + offsetY);
        popup.addButton('prevButton','prev_button', 'prev_button_hover', false, -580, 300 + offsetY);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['nextButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['prevButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);

        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        popup['nextButton'].clickEvent.add(()=>
        {
            if(index < containers.length - 1) index++;
            else index = 0;
            refreshInfoPu(containers, selectors, index);
        }, this);

        popup['prevButton'].clickEvent.add(()=>
        {
            if(index > 0) index--;
            else index = containers.length - 1;
            refreshInfoPu(containers, selectors, index);
        }, this);

        // create minor symbols panel
        let minorContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(minorContainer);
        popup.add(minorContainer);
        //let minorTitle =  popup.scene.add.sprite(0, -330, 'minor_title').setOrigin(0.5); // image
        let minorTitle = popup.scene.add.bitmapText(0, -272, 'gameFont_2', 'SYMBOLS', 57, 1).setOrigin(0.5); // text
        minorContainer.add(minorTitle);

        let row1Y = -100;
        let row2Y = row1Y + 147;
        let row3Y = row2Y + 147;

        let col1X = -355;
        let colDist = 435;
        let col2X = col1X + colDist;
        let col3X = col2X + colDist;

        // row 1
        createSymbolPlate3x(popup, minorContainer, 'CanGUI',  col1X , row1Y, 1,);
        createSymbolPlate3x(popup, minorContainer, 'BurgerGUI', col2X, row1Y, 2); 
        createSymbolPlate3x(popup, minorContainer, 'IceCreamGUI', col3X, row1Y, 3);

        // row 2
        createSymbolPlate3x(popup, minorContainer, 'FriesGUI', col1X, row2Y, 4);
        createSymbolPlate3x(popup, minorContainer, '1BarGUI', col2X, row2Y, 11);
        createSymbolPlate3x(popup, minorContainer, '2BarGUI', col3X, row2Y, 12);

        // row 3
        createSymbolPlate3x(popup, minorContainer, '3BarGUI', col1X, row3Y, 13);
        createSymbolPlate3x(popup, minorContainer, 'BellGUI', col2X, row3Y, 14);
        createSymbolPlate3x(popup, minorContainer, 'SevenGUI', col3X, row3Y,15);

        minorContainer.visible = false;

        // create major symbols panel
        //let majorContainer = popup.scene.add.container(0, 0 + offsetY);
        //containers.push(majorContainer);
        //popup.add(majorContainer);
        // let majorTitle =  popup.scene.add.sprite(0, -324, 'major_title').setOrigin(0.5); // image
        //let majorTitle = popup.scene.add.bitmapText(0, -272, 'gameFont_2', 'MAJOR SYMBOLS', 57, 1).setOrigin(0.5); // text
        //majorContainer.add(majorTitle);

        // major row 1
        //createSymbolPlate3x(popup, majorContainer, '1BarGUI', col1X, row1Y, 2, 3, 8);
        //createSymbolPlate3x(popup, majorContainer , '2BarGUI', col2X, row1Y, 11, 13, 17);
        //createSymbolPlate3x(popup, majorContainer , '3BarGUI', col3X, row1Y, 11, 13, 19);

        // major row 2
        //createSymbolPlate3x(popup, majorContainer , 'BellGUI', col1X + 0.5 * colDist, row2Y, 11, 14, 20);
        //createSymbolPlate3x(popup, majorContainer , 'SevenGUI', col2X + 0.5 * colDist, row2Y, 11, 15, 25);
        //majorContainer.visible = false;

        // create special symbols panel
        let specialContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(specialContainer);
        popup.add(specialContainer);
        // let specialTitle =  popup.scene.add.sprite(0, -330, 'special_title').setOrigin(0.5); // image
        let specialTitle = popup.scene.add.bitmapText(0, -272, 'gameFont_2', 'SPECIAL SYMBOLS', 57, 1).setOrigin(0.5); // text
        specialContainer.add(specialTitle);
    
        // special row 1
        createSpecSymbolPlate(popup, specialContainer, 'WildGUI', -390, -70, 'Wild can be used with any symbols on the reels to create \nwinning combinations (exclude first reel).');
        createSpecSymbolPlate(popup, specialContainer, 'BonusGUI', -390, 190 , '3 Bonus symbols on the screen give the player 3 free spins.');
        //createSpecSymbolPlate(popup, specialContainer, 'Jackpot', -490 , 225 + 10 , 'Any 6 jackot symbols scattered on the screen = Jackpot Win.');
        specialContainer.visible = false;

        // create rules panel
        let rulesContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(rulesContainer);
        popup.add(rulesContainer);
        // let rulesTitle =  popup.scene.add.sprite(0, -330, 'rules_title').setOrigin(0.5); // image
        let rulesTitle = popup.scene.add.bitmapText(0, -272, 'gameFont_2', 'RULES', 57, 1).setOrigin(0.5); // text
        rulesContainer.add(rulesTitle);

        let aboutTitle = popup.scene.add.bitmapText(-500, -140, 'gameFont_2', 'About the game', 29, 0).setOrigin(0,0.5); // text
        rulesContainer.add(aboutTitle);
        let aboutText = popup.scene.add.bitmapText(-500, -100, 'gameFont_0',
        'Shopping slot is a game with 3 reels and 1 payline oriented from left \nto right. The game have 9 regular symbols that win if three or more \nare lined up in sequence on a payline, beginning from the leftmost \nposition. The 4 high pay symbols and the 5 low pay symbols.', 29, 0).setOrigin(0, 0); // text
        aboutText.tint = 0x7f7b88;
        rulesContainer.add(aboutText);

        let howTitle = popup.scene.add.bitmapText(-500, 110, 'gameFont_2', 'How to play', 29, 0).setOrigin(0,0.5); // text
        rulesContainer.add(howTitle);
        let howText = popup.scene.add.bitmapText(-500, 150, 'gameFont_0',
        '- Place your bet \n- Press the Spin button to start game ', 29, 0).setOrigin(0, 0); // text   \n- Press the AutoSpin button to turn Auto Spin game mode \n- You can also use Max Bet button to auto bet
        howText.tint = 0x7f7b88;
        rulesContainer.add(howText);

        // create navi selectors
        let dotDist = 50;
        let offsetDots = dotDist * (containers.length - 1) / 2;
        if(popup.scene.textures.exists('navi_dot_active') && popup.scene.textures.exists('navi_dot'))
        {
            for(let i = 0; i < containers.length; i++)
            {
                var selector = popup.scene.add.sprite(-offsetDots + i * dotDist, 440 + offsetY, 'navi_dot').setOrigin(0.5);
                selectors.push(selector);
                popup.add(selector);
            }
        }
        refreshInfoPu(containers, selectors, index);
    },

    createAboutPUHandler: function(popup)
    {     
        let yOffset = -70;
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        // backGround.tint = 0x262a3a;
        // backGround.setAlpha(0.05);
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'about_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        // let title = popup.scene.add.sprite(0, -305 + yOffset, 'about_title').setOrigin(0.5);
        let title = popup.scene.add.bitmapText(0, -305, 'gameFont_2', 'ABOUT', 57, 1).setOrigin(0.5); 
        popup.add(title);

        // add logo
        let logo = popup.scene.add.sprite(0, -30 + yOffset, 'logo').setOrigin(0.5);
        popup.add(logo);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 115 + yOffset, 'gameFont_2', 'NEED HELP?', 29, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
        popup.add(popup.messageText);

        // add buttons
        popup.addButton('supportButton','middle_button', 'middle_button_hover', false, -2, 182 + yOffset);
        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 187, -232  + yOffset);

        popup['supportButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['supportButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);
        
        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        // add support button text
        popup.supText = popup.scene.add.bitmapText(0, 175 + yOffset, 'gameFont_3', 'SUPPORT', 29, 1).setOrigin(0.5);
        popup.supText.tint = 0xFFFFFF;
        popup.add(popup.supText);
    },

    createSettingsPUHandler: function(popup)
    {    
        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0+ yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        // backGround.tint = 0x262a3a;
        // backGround.setAlpha(0.5);
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'settings_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        // let title = popup.scene.add.sprite(0, -305 + yOffset, 'settings_title').setOrigin(0.5);
        let title = popup.scene.add.bitmapText(0, -305, 'gameFont_2', 'SETTINGS', 57, 1).setOrigin(0.5); 
        popup.add(title);

        // sound and music text
        popup.soundText = popup.scene.add.bitmapText(-96, -117 + yOffset, 'gameFont_2', 'SOUNDS', 29, 1).setOrigin(0.5);
        //popup.soundText.tint = 0x4f2930;
        popup.add(popup.soundText);

        popup.musicText = popup.scene.add.bitmapText(96, -117 + yOffset, 'gameFont_2', 'MUSIC', 29, 1).setOrigin(0.5);
        //popup.musicText.tint = 0x4f2930;
        popup.add(popup.musicText);

        // sound and music buttons
        popup.addButton('soundButton','button_on', 'button_off', true, -95, -35 + yOffset);
        popup.addButton('musicButton','button_on', 'button_off', true, 95, -35 + yOffset);

        popup['soundButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['soundButton'].clickEvent.add(()=>{popup.scene.soundController.soundOn(!popup.scene.soundController._soundOn);}, popup);
        if(!popup.scene.soundController._soundOn) popup['soundButton'].setPressed();

        popup['musicButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['musicButton'].clickEvent.add(()=>{popup.scene.soundController.musicOn(!popup.scene.soundController._musicOn);}, popup);
        if(!popup.scene.soundController._musicOn) popup['musicButton'].setPressed();

        // privacy ant terms buttons
        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 228, -232  + yOffset);

      
       

        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

    },

    createFreeGamesPUHandler: function(popup)
    {
        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'message_panel').setOrigin(0.5);
        popup.add(panel);
        // let title = popup.scene.add.sprite(0, -175 + yOffset, 'freespin_title').setOrigin(0.5);
        // popup.add(title);
        
        // add caption
        popup.captionText = popup.scene.add.bitmapText(0, -200, 'gameFont_2', 'FREE GAME', 57, 1).setOrigin(0.5);
        popup.add(popup.captionText);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -20 + yOffset, 'gameFont_0', '0', 100, 1).setOrigin(0.5);
        popup.messageText.tint = 0x7f7b88;
        popup.add(popup.messageText);

        // add buttons
        popup.addButton('okButton','middle_button', 'middle_button_hover', false, 0, 115 + yOffset);
        popup['okButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['okButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});
        // add button text
        popup.okText = popup.scene.add.bitmapText(0, 110 + yOffset, 'gameFont_3', 'START', 29, 1).setOrigin(0.5);
        popup.okText.tint = 0xFFFFFF;
        popup.add(popup.okText);
    },

    // not used
    createBigWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'message_panel').setOrigin(0.5);
        popup.add(panel);
        //let title = popup.scene.add.sprite(0, -170 + yOffset, 'bigwin_title').setOrigin(0.5);
        //popup.add(title);

        // add caption
        popup.captionText = popup.scene.add.bitmapText(0, -180, 'gameFont_2', 'BIG WIN', 57, 1).setOrigin(0.5);
        popup.add(popup.captionText);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 30 + yOffset, 'gameFont_0', '0', 100, 1).setOrigin(0.5);
        popup.messageText.tint = 0x7f7b88;
        popup.add(popup.messageText);
    },

    // not used
    createHugeWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'message_panel').setOrigin(0.5);
        popup.add(panel);
        // let title = popup.scene.add.sprite(0, -173 + yOffset, 'hugewin_title').setOrigin(0.5);
        // popup.add(title);

        // add caption
        popup.captionText = popup.scene.add.bitmapText(0, -180, 'gameFont_2', 'HUGE WIN', 57, 1).setOrigin(0.5);
        popup.add(popup.captionText);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 30 + yOffset, 'gameFont_0', '0', 100, 1).setOrigin(0.5);
        popup.messageText.tint = 0x7f7b88;
        popup.add(popup.messageText);
    },

    // not used
    createMegaWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'message_panel').setOrigin(0.5);
        popup.add(panel);
        // let title = popup.scene.add.sprite(2, -173 + yOffset, 'megawin_title').setOrigin(0.5);
        // popup.add(title);

        // add caption
        popup.captionText = popup.scene.add.bitmapText(0, -180, 'gameFont_2', 'MEGA WIN', 57, 1).setOrigin(0.5);
        popup.add(popup.captionText);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 30 + yOffset, 'gameFont_0', '0', 100, 1).setOrigin(0.5);
        popup.messageText.tint = 0x7f7b88;
        popup.add(popup.messageText);
    },

    // not used
    createJackpotWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(8, 0 + yOffset, 'message_panel').setOrigin(0.5);
        popup.add(panel);
        // let title = popup.scene.add.sprite(0, -105 + yOffset, 'jackpotwin_title').setOrigin(0.5);
        // popup.add(title);

        // add caption
        popup.captionText = popup.scene.add.bitmapText(0, -180, 'gameFont_2', 'JACKPOT', 57, 1).setOrigin(0.5);
        popup.add(popup.captionText);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 30 + yOffset, 'gameFont_0', '0', 100, 1).setOrigin(0.5);
        popup.messageText.tint = 0x7f7b88;
        popup.add(popup.messageText);
    },
}

class AnimatedCoinParticle extends Phaser.GameObjects.Particles.Particle
{
    constructor (emitter)
    {
        super(emitter);

        this.t = 0;
        this.i = 0;
        this.framesCount = 7;
    }
	
    update (delta, step, processors)
    {
        var result = super.update(delta, step, processors);
        this.t += delta;

        if (this.t >= coinSpinAnim.msPerFrame)
        {
            this.i++;
            if (this.i > this.framesCount-1)
            {
                this.i = 0;
            }
            this.frame = coinSpinAnim.frames[this.i].frame;
            this.t -= coinSpinAnim.msPerFrame;
        }
        return result;
    }
}
