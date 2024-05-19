// 3x5 243 lines
var slotConfig3x5 = {
    slotTextColor : 0xFFEA31,   // text color

    symbolSizeY: 219,
    spinTime: 2000,                 // time, milliseconds
    winShowTime: 3000,              // time, milliseconds
    showWinCoinsMessage : false,    // displaying a message with the amount of money won
    winMessageTime: 2000,           // win message show time

    symbAnimFrameRate: 24,      // symbols animation frame rate
    frameWidth : 240,           // frame width
    frameHeight : 240,          // frame height

    lineColor : 0xFFEA31,       // line color

    lineBetMaxValue: 20,        // slot line bet maxvalue
    useWild: true,              // use wild flag, wild can be substitute for any symbol to create winning combinations (exclude first reel)
    wild: 'Wild',               // wild symbol name
    useScatter: true,           // use scatter flag
    scatter: 'Scatter',         // scatter symbol name
    selectedLines: 'all',       //'all' / 'first' - selectad lines at start

    useWildInFirstPosition: false,              // substitute of the first symbol not allowed
    useLineBetMultiplier: true,                 // win multiplied by bet
    useLineBetFreeSpinMultiplier: false,        // free spins win multiplied by bet
    defaultCoins: 100000,                       // default player credit 100 000

    localOffsetX: 0,                            // x offset from center for all scene objects
    localOffsetY: 70,                           // y offset from center for all scene objects

    
    fonts: [
        {
            fontName: 'gameFont',
            filePNG:  'fonts/vollkorn_96_3.png',
            fileXML:  'fonts/vollkorn_96_3.xml'
        },
        {
            fontName: 'gameFont_0',
            filePNG:  'fonts/vollkorn_96_0.png',
            fileXML:  'fonts/vollkorn_96_0.xml'
        },
        {
            fontName: 'gameFont_1',
            filePNG:  'fonts/vollkorn_96_2.png',
            fileXML:  'fonts/vollkorn_96_2.xml'
        },
        {
            fontName: 'gameFont_2',
            filePNG:  'fonts/vollkorn_96_1.png',
            fileXML:  'fonts/vollkorn_96_1.xml'
        },
    ],

    sprites: [
        // common sprites 
        {
            fileName: 'SlotMachine_3x5.png',
            name: 'slot'
        },
        {
            fileName: 'ReelMaskTop_3x5.png',
            name: 'slotmasktop'
        },
        {
            fileName: 'ReelMaskBottom_3x5.png',
            name: 'slotmaskbottom'
        },
        {
            fileName: 'ReelLeftBorder.png',
            name: 'reelleftborder'
        },
        {
            fileName: 'ReelRightBorder.png',
            name: 'reelrightborder'
        },
        {
            fileName: 'Roof_1.png',
            name: 'roof'
        },
        {
            fileName: 'LanternsLeft.png',
            name: 'lanternsleft'
        },
        {
            fileName: 'LanternsRight.png',
            name: 'lanternsright'
        },
        {
            fileName: 'ColumnLeft.png',
            name: 'columnleft'
        },
        {
            fileName: 'ColumnRight.png',
            name: 'columnright'
        },
        {
            fileName: 'Balk.png',
            name: 'balk'
        },
        {
            fileName: 'Upstairs.png',
            name: 'upstairs'
        },
        {
            fileName: 'JackpotTitle.png',
            name: 'jackpottitle'
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
            fileName: 'ButtonPlus.png',
            name: 'button_plus'
        },
        {
            fileName: 'ButtonPlusHover.png',
            name: 'button_plus_hover'
        },
        {
            fileName: 'ButtonMinus.png',
            name: 'button_minus'
        },
        {
            fileName: 'ButtonMinusHover.png',
            name: 'button_minus_hover'
        },
        {
            fileName: null,
            name: 'lamp_off'
        },
        {
            fileName: 'PanelTotalBet.png',
            name: 'panel_totalbet'
        },
        {
            fileName: 'PanelWin.png',
            name: 'panel_win'
        },
        {
            fileName: 'PanelLines.png',
            name: 'panel_lines'
        },
        {
            fileName: 'PanelBalance.png',
            name: 'panel_balance'
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
            fileName: 'ButtonMaxBet.png',
            name: 'button_maxbet'
        },
        {
            fileName: 'ButtonMaxBetHover.png',
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
            fileName: 'ButtonAutoSpin.png',
            name: 'button_autospin'
        },
        {
            fileName: 'ButtonAutoSpinHover.png',
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
            fileName: 'gui/AboutTitle.png',
            name: 'about_title'
        }, 
        {
            fileName: 'gui/SettingsPanel.png',
            name: 'settings_panel'
        }, 
        {
            fileName: 'gui/FreeSpinPanel.png',
            name: 'freespin_panel'
        }, 
        {
            fileName: 'gui/FreeSpinTitle.png',
            name: 'freespin_title'
        },
        {
            fileName: 'gui/FreeSpinPanel.png',
            name: 'freespin_title'
        }, 
        {
            fileName: 'gui/BigWinPanel.png',
            name: 'bigwin_panel'
        }, 
        {
            fileName: 'gui/BigWinTitle.png',
            name: 'bigwin_title'
        }, 
        {
            fileName: 'gui/HugeWinPanel.png',
            name: 'hugewin_panel'
        }, 
        {
            fileName: 'gui/HugeWinTitle.png',
            name: 'hugewin_title'
        },
        {
            fileName: 'gui/MegaWinPanel.png',
            name: 'megawin_panel'
        }, 
        {
            fileName: 'gui/MegaWinTitle.png',
            name: 'megawin_title'
        },
        {
            fileName: 'gui/SettingsTitle.png',
            name: 'settings_title'
        },
        {
            fileName: 'gui/HelpTitle.png',
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
            fileName: 'gui/ExtraLongButton.png', 
            name: 'extralong_button'
        }, 
        {
            fileName: 'gui/ExtraLongButtonHover.png', 
            name: 'extralong_button_hover'
        },
        {
            fileName: 'gui/InfoPanel.png', 
            name: 'info_panel'
        },   
        {
            fileName: 'gui/JackpotWinPanel.png', 
            name: 'jackpotwin_panel'
        },   
        {
            fileName: 'gui/JackpotWinTitle.png', 
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
            fileName: 'gui/MinorTitle.png', 
            name: 'minor_title'
        },   
        {
            fileName: 'gui/MajorTitle.png', 
            name: 'major_title'
        },  
        {
            fileName: 'gui/SpecialTitle.png', 
            name: 'special_title'
        },    
        {
            fileName: 'gui/RulesTitle.png', 
            name: 'rules_title'
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
            fileName: 'CoinsHeap.png',                      // filename or null
            name: 'CoinsHeap',                              // sprite name
            fileNameBlurred: 'CoinsHeapBlurred.png',        // blurry symbol file name, folder png/SymbolsBlurred
            animation: 'CoinsSheet.png',                    // animation sheet file name, folder png/SymbolsSheet
            useWildSubstitute: true                         // use wild substitute for the symbol
        },
        {
            fileName: 'Scroll.png',           
            name: 'Scroll',                   
            fileNameBlurred: 'ScrollBlurred.png', 
            animation: 'ScrollSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Fan.png',           
            name: 'Fan',                   
            fileNameBlurred: 'FanBlurred.png', 
            animation: 'FanSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: '10.png',          
            name: '10',                   
            fileNameBlurred: '10Blurred.png', 
            animation: '10Sheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'A.png',          
            name: 'A',                   
            fileNameBlurred: 'ABlurred.png', 
            animation: 'ASheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Teapot.png',          
            name: 'Teapot',                   
            fileNameBlurred: 'TeapotBlurred.png', 
            animation: 'TeapotSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Sycee.png',          
            name: 'Sycee',                   
            fileNameBlurred: 'SyceeBlurred.png', 
            animation: 'SyceeSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'J.png',          
            name: 'J',                   
            fileNameBlurred: 'JBlurred.png', 
            animation: 'JSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'K.png',          
            name: 'K',                   
            fileNameBlurred: 'KBlurred.png', 
            animation: 'KSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Q.png',          
            name: 'Q',                   
            fileNameBlurred: 'QBlurred.png', 
            animation: 'QSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Wild.png',          
            name: 'Wild',                   
            fileNameBlurred: 'WildBlurred.png', 
            animation: 'WildSheet.png',
            useWildSubstitute: false
        },
        {
            fileName: 'Scatter.png',          
            name: 'Scatter',                   
            fileNameBlurred: 'ScatterBlurred.png', 
            animation: 'ScatterSheet.png',
            useWildSubstitute: false
        },
        {
            fileName: 'Jackpot.png',          
            name: 'Jackpot',                   
            fileNameBlurred: 'JackpotBlurred.png', 
            animation: 'JackpotSheet.png',
            useWildSubstitute: false
        }
    ],

    reels:[
        {//0
            symbolImages: ['Fan', 'Sycee', 'J', 'Sycee', 'Q', 'CoinsHeap', 'Teapot', 'K', 'A', 'CoinsHeap'],                            // Teapot
            offsetX: -424,
            offsetY: -25,
            windowImage: 'reel',    // not used
            windowsCount: 3,    
            addSpinTime: 0, // additional spin time for reel milliseconds   
        },
        {//1
            symbolImages: ['Sycee', 'CoinsHeap', 'Wild', 'Fan','Q', 'Sycee', 'J', 'CoinsHeap', 'K','A', 'Teapot', 'CoinsHeap'],         // 12 J 'Wild', -> J CoinsHeap
            offsetX: -212,
            offsetY: -25,
            windowImage: 'reel',        // not used
            windowsCount: 3,    
            addSpinTime: 100, // additional spin time for reel milliseconds   
        },
        { // 2
            symbolImages: ['Sycee', 'Wild', 'K', 'Fan', 'Q', 'CoinsHeap', 'Sycee', 'J', 'Wild', 'Scatter', 'A', 'Wild', 'Jackpot', 'Teapot', 'Jackpot'],   // 13
            offsetX: 0,
            offsetY: -25,
            windowImage: 'reel',        // not used
            windowsCount: 3,
            addSpinTime: 200, // additional spin time for reel milliseconds   
        },
        { // 3
            symbolImages: ['Fan', 'Sycee', 'Wild', 'J', 'Q', 'Sycee', 'Wild', 'K', 'A', 'Wild', 'Scatter', 'CoinsHeap', 'Scatter', 'Jackpot', 'Teapot', 'Jackpot'],   // 14
            offsetX: 212,
            offsetY: -25,
            windowImage: 'reel',        // not used
            windowsCount: 3,
            addSpinTime: 300, // additional spin time for reel milliseconds     
        },
        { // 4
            symbolImages: ['CoinsHeap', 'Wild', 'Sycee', 'Fan', 'Sycee', 'J', 'Wild', 'Q', 'A', 'Wild', 'Scatter', 'K', 'Scatter' ,'Jackpot', 'Teapot', 'Jackpot'],   // 14
            offsetX: 424,
            offsetY: -25,
            windowImage: 'reel',        // not used
            windowsCount: 3,
            addSpinTime: 400, // additional spin time for reel milliseconds     
        }
    ],

    // reels_simulate: [0, 0, -1, -1, -1],    // -1 - avoid reel simulate
    // reels_simulate: [0, 0, 9, 10, 10],     // scatter win
    // reels_simulate: [0, 0, 12, 13, 13],    // jackpot win

    payLines:[
        {
            line: ['CoinsHeap', 'CoinsHeap', 'CoinsHeap', 'CoinsHeap', 'CoinsHeap'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['CoinsHeap', 'CoinsHeap', 'CoinsHeap', 'CoinsHeap', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['CoinsHeap', 'CoinsHeap', 'CoinsHeap', 'any', 'any'],
            pay: 1,
            freeSpins: 0
        },
        {
            line: ['Scroll', 'Scroll', 'Scroll', 'Scroll', 'Scroll'],
            pay: 5,
            freeSpins: 0
        },
        {
            line: ['Scroll', 'Scroll', 'Scroll', 'Scroll', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Scroll', 'Scroll', 'Scroll', 'any', 'any'],
            pay: 1,
            freeSpins: 0
        },
        {
            line: ['Fan', 'Fan', 'Fan', 'Fan', 'Fan'],
            pay: 6,
            freeSpins: 0
        },
        {
            line: ['Fan', 'Fan', 'Fan', 'Fan', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Fan', 'Fan', 'Fan', 'any', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['Sycee', 'Sycee', 'Sycee', 'Sycee', 'Sycee'],
            pay: 7,
            freeSpins: 0
        },
        {
            line: ['Sycee', 'Sycee', 'Sycee', 'Sycee', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Sycee', 'Sycee', 'Sycee', 'any', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['Teapot', 'Teapot', 'Teapot', 'Teapot', 'Teapot'],
            pay: 8,
            freeSpins: 0
        },
        {
            line: ['Teapot', 'Teapot', 'Teapot', 'Teapot', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Teapot', 'Teapot', 'Teapot', 'any', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['J', 'J', 'J', 'J', 'J'],
            pay: 17,
            freeSpins: 0
        },
        {
            line: ['J', 'J', 'J', 'J', 'any'],
            pay: 13,
            freeSpins: 0
        },
        {
            line: ['J', 'J', 'J', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['Q', 'Q', 'Q', 'Q', 'Q'],
            pay: 19,
            freeSpins: 0
        },
        {
            line: ['Q', 'Q', 'Q', 'Q', 'any'],
            pay: 13,
            freeSpins: 0
        },
        {
            line: ['Q', 'Q', 'Q', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['K', 'K', 'K', 'K', 'K'],
            pay: 20,
            freeSpins: 0
        },
        {
            line: ['K', 'K', 'K', 'K', 'any'],
            pay: 14,
            freeSpins: 0
        },
        {
            line: ['K', 'K', 'K', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['A', 'A', 'A', 'A', 'A'],
            pay: 25,
            freeSpins: 0
        },
        {
            line: ['A', 'A', 'A', 'A', 'any'],
            pay: 15,
            freeSpins: 0
        },
        {
            line: ['A', 'A', 'A', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
    ],
    
    scatterPayTable:[
        {
            scattersCount: 5,
            pay: 0,
            freeSpins: 5
        }
    ],
    
    // jackpot settings
    jackpot:
        {
            symbolName: 'Jackpot',
            symbolsCount: 6,
            defaultAmount: 1000,        // coins amout at start
            increaseValue: 1,           // jackpot increment after spin
        },

    createSlotGraphic: function(scene){
        // scene.background =  scene.addSpriteLocPos('background', 0, 0); //?.setScale(1.5);
        // scene.background.depth = -5;

        // lamps
        /*
            scene.lampsArray = []; 
            scene.leftLamp = new Lamp (scene, -366, -490);
            scene.rightLamp = new Lamp (scene, 366, -490);
            scene.rightLamp.lamp.setScale(-1, 1); // mirror right lamp
            scene.lampsArray.push(scene.leftLamp);
            scene.lampsArray.push(scene.rightLamp);
            scene.leftLamp.on();
            scene.rightLamp.on();
        */
       
         scene.slot =  scene.addSpriteLocPos('slot', 0, 0 - 25); 
         scene.slot.depth = -1;

         scene.slot =  scene.addSpriteLocPos('reelleftborder', -538, 0 - 25); 
         scene.slot =  scene.addSpriteLocPos('reelrightborder',  538, 0 - 25); 
         scene.slot =  scene.addSpriteLocPos('slotmasktop', 0, -297 - 25); 

         scene.slot =  scene.addSpriteLocPos('roof', 0, -600); 
         scene.slot =  scene.addSpriteLocPos('balk', 0, -410); 
         scene.slot =  scene.addSpriteLocPos('jackpottitle', 0, -470);     
         scene.slot =  scene.addSpriteLocPos('upstairs', 0, 800); 

         scene.slot =  scene.addSpriteLocPos('columnleft', -610, 0); 
         scene.slot =  scene.addSpriteLocPos('columnright', 610, 0); 
         scene.slot =  scene.addSpriteLocPos('lanternsleft', -450, -650); 
         scene.slot =  scene.addSpriteLocPos('lanternsright', 440, -550); 
         scene.slot =  scene.addSpriteLocPos('slotmaskbottom', 0, 316 - 25); 

         scene.linesPanel = scene.addSpriteLocPos('panel_lines', -740, 196 + 200); 
         scene.totalbetPanel = scene.addSpriteLocPos('panel_totalbet', -440, 196 + 200); // -400
    
         scene.balancePanel = scene.addSpriteLocPos('panel_balance', 720, 196 + 200); 
         scene.winPanel = scene.addSpriteLocPos('panel_win', 420, 196 + 200); 
    },

    createReels: function(scene) {
        var _reels = [];
        for(var ri = 0; ri < this.reels.length; ri++)
        {
            _reels.push(new Reel(scene, this.reels[ri], ri, this.symbolSizeY, this.reels[ri].windowsCount, true, this.spinTime, this.symbAnimFrameRate));
        }
        return _reels;
    },

    createControls: function(scene, slotControls) {
        let depth = 11;

        // totalbet minus button
        slotControls.totalBetMinusButton = new SceneButton(scene, 'button_minus','button_minus_hover', false);   
        slotControls.buttons.push(slotControls.totalBetMinusButton);
        slotControls.totalBetMinusButton.create(-440-110, 196 + 200, 0.5, 0.5);
        slotControls.totalBetMinusButton.addClickEvent(slotControls.lineBetMinus_Click, slotControls);
        slotControls.totalBetMinusButton.setDepth(depth); 

        // totalbet plus button
        slotControls.totalBetPlusButton = new SceneButton(scene, 'button_plus','button_plus_hover', false);   
        slotControls.buttons.push(slotControls.totalBetPlusButton);
        slotControls.totalBetPlusButton.create(-440 + 110, 196 + 200, 0.5, 0.5);
        slotControls.totalBetPlusButton.addClickEvent(slotControls.lineBetPlus_Click, slotControls);
        slotControls.totalBetPlusButton.setDepth(depth); 

        // maxbet button
        slotControls.slotMaxBetButton = new SceneButton(scene, 'button_maxbet', 'button_maxbet_hover', false);   
        slotControls.buttons.push(slotControls.slotMaxBetButton);
        slotControls.slotMaxBetButton.create(-130, 196 + 200, 0.5, 0.5);
        slotControls.slotMaxBetButton.addClickEvent(slotControls.maxBet_Click, slotControls);     
        slotControls.slotMaxBetButton.setDepth(depth); 
         
        
        // autoSpin button
        slotControls.slotAutoSpinButton = new SceneButton(scene, 'button_autospin', 'button_autospin_hover', true); 
        slotControls.buttons.push(slotControls.slotAutoSpinButton);
        slotControls.slotAutoSpinButton.create(130, 196 + 200, 0.5, 0.5);
        slotControls.slotAutoSpinButton.button.setVisible(true);   
        slotControls.changeAutoSpinModeEvent.add((autoSpin)=>
        {
            if (!autoSpin)
            {
                slotControls.slotAutoSpinButton.release();
            }
        }, this);
        slotControls.slotAutoSpinButton.setDepth(depth); 

        // spin button
        slotControls.slotSpinButton = new SpinButton(scene, 'button_spin', 'button_spin_hover', false);   
        slotControls.buttons.push(slotControls.slotSpinButton);
        slotControls.slotSpinButton.create(0, 160 + 200, 0.5, 0.5);    
        slotControls.slotSpinButton.clickEvent.add(scene.handleAnimation, scene);  
        slotControls.slotSpinButton.setDepth(depth); 

        // menu button
        slotControls.menuButton = new SceneButton(scene, 'button_menu', 'button_menu_hover', false);   
        slotControls.buttons.push(slotControls.menuButton);
        slotControls.menuButton.create(860, -360, 0.5, 0.5);
        slotControls.menuButton.addClickEvent(()=>{ 
            var pu = scene.guiController.showPopUp(this.createInfoPUHandler);
            scene.soundController.playClip('button_click');}, this);
        slotControls.menuButton.button.setVisible(true);
        slotControls.menuButton.setDepth(depth); 

        // settings button
        slotControls.settingsButton = new SceneButton(scene, 'button_settings', 'button_settings_hover', false);   
        slotControls.buttons.push(slotControls.settingsButton);
        slotControls.settingsButton.create(860, -230, 0.5, 0.5);
        slotControls.settingsButton.addClickEvent(()=>{ 
            console.log('settings click');
            var pu = scene.guiController.showPopUp(this.createSettingsPUHandler);
            scene.soundController.playClip('button_click');}, this);
        slotControls.settingsButton.button.setVisible(false);  
        slotControls.settingsButton.setDepth(depth); 

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

       // rules button
       slotControls.rulesButton = new SceneButton(scene, 'button_rules', 'button_rules_hover', false);   
       slotControls.buttons.push(slotControls.rulesButton);
       slotControls.rulesButton.create(860, -100, 0.5, 0.5);
       slotControls.rulesButton.addClickEvent(()=>{
           var pu = scene.guiController.showPopUp(this.createInfoPUHandler);
           scene.soundController.playClip('button_click');
       }, this);   
       slotControls.rulesButton.button.setVisible(false); 
       slotControls.rulesButton.setDepth(depth); 

       // info button
       slotControls.slotInfoButton = new SceneButton(scene, 'button_info', 'button_info_hover', false);   
       slotControls.buttons.push(slotControls.slotInfoButton);
       slotControls.slotInfoButton.create(860, 30, 0.5, 0.5);
       slotControls.slotInfoButton.addClickEvent(()=>{
            console.log('info click');
           var pu = scene.guiController.showPopUp(this.createAboutPUHandler);
           scene.soundController.playClip('button_click');
       }, this);   
       slotControls.slotInfoButton.button.setVisible(false); 
       slotControls.slotInfoButton.setDepth(depth); 

        // adding the text fields
        slotControls.linesText = scene.add.bitmapText(scene.centerX - 740, scene.centerY + 156 + 220, 'gameFont_2', 'LINES', 38, 1).setOrigin(0.5);
        slotControls.linesText.depth = depth;
        slotControls.linesCountText = scene.add.bitmapText(scene.centerX - 740, scene.centerY + 185 + 220, 'gameFont_1', slotControls.selectedLinesCount, 78, 1).setOrigin(0.5);
        slotControls.linesCountText.depth = depth;
        // todel slotControls.slotLinesLoopButton.pointerDownEvent.add(()=>{slotControls.linesCountText.setPosition(slotControls.linesCountText.x, scene.centerY + 212);});
        // todel slotControls.slotLinesLoopButton.pointerUpEvent.add(()=>{slotControls.linesCountText.setPosition(slotControls.linesCountText.x, scene.centerY + 200);});
 

        slotControls.lineBetAmountText = scene.add.bitmapText(scene.centerX - 420, scene.centerY + 210 + 220, 'gameFont_1', slotControls.lineBet, 96, 1).setOrigin(0.5);
        slotControls.lineBetAmountText.setVisible(false);
        slotControls.lineBetAmountText.depth = depth;
        // todel slotControls.slotLineBetLoopButton.pointerDownEvent.add(()=>{slotControls.lineBetAmountText.setPosition(slotControls.lineBetAmountText.x, scene.centerY + 212);});
        // todel slotControls.slotLineBetLoopButton.pointerUpEvent.add(()=>{slotControls.lineBetAmountText.setPosition(slotControls.lineBetAmountText.x, scene.centerY + 200);});
 
        slotControls.totalBetText = scene.add.bitmapText(scene.centerX - 440, scene.centerY + 156 + 220, 'gameFont_2', 'TOTAL  BET', 38, 1).setOrigin(0.5);
        slotControls.totalBetText.depth = depth;
        // slotControls.totalBetText.tint = this.slotTextColor;
  
        slotControls.totalBetSumText = scene.add.bitmapText(scene.centerX - 440, scene.centerY + 185 + 220, 'gameFont_1', slotControls.getTotalBet(), 78, 1).setOrigin(0.5);
        slotControls.totalBetSumText.depth = depth;
        // slotControls.totalBetSumText.tint = this.slotTextColor;
 
        slotControls.creditText = scene.add.bitmapText(scene.centerX + 720, scene.centerY + 156 + 220, 'gameFont_2', 'BALANCE', 38, 1).setOrigin(0.5);
        slotControls.creditText.depth = depth;
        // slotControls.creditText.tint = this.slotTextColor;

        slotControls.creditSumText = scene.add.bitmapText(scene.centerX + 720, scene.centerY + 185 + 220, 'gameFont_1', '' + scene.slotPlayer.coins, 78, 1).setOrigin(0.5);
        slotControls.creditSumText.depth = depth;
        // slotControls.creditSumText.tint = this.slotTextColor;
         
        slotControls.winText = scene.add.bitmapText(scene.centerX + 420, scene.centerY + 156 + 220, 'gameFont_2', 'YOUR  WIN', 38, 1).setOrigin(0.5);
        slotControls.winText.depth = depth;

        slotControls.winAmountText = scene.add.bitmapText(scene.centerX + 420, scene.centerY + 185 + 220, 'gameFont_1', '0', 78, 1).setOrigin(0.5);
        slotControls.winAmountText.depth = depth;
        // slotControls.winAmountText.tint = this.slotTextColor;
        // slotControls.winAmountText.setVisible(false);

        slotControls.jackpotAmountText = scene.add.bitmapText(scene.centerX + 0, scene.centerY - 633 + 220, 'gameFont_1', '0', 56, 1).setOrigin(0.5);
        slotControls.jackpotAmountText.depth = depth;

        slotControls.autoSpinText = scene.add.bitmapText(scene.centerX + 147, scene.centerY + 178 + 200, 'gameFont_1', 'AUTO', 56, 1).setOrigin(0.5);
        slotControls.autoSpinText.setLetterSpacing(-10);
        slotControls.autoSpinText.depth = depth;
        slotControls.autoSpinText1 = scene.add.bitmapText(scene.centerX + 147, scene.centerY + 216 + 200, 'gameFont_1', 'SPIN', 56, 1).setOrigin(0.5);
        slotControls.autoSpinText1.depth = depth;

        slotControls.maxBetText = scene.add.bitmapText(scene.centerX - 150, scene.centerY + 178 + 200, 'gameFont_1', 'MAX', 56, 1).setOrigin(0.5);
        slotControls.maxBetText.setLetterSpacing(-10);
        slotControls.maxBetText.depth = depth;
        slotControls.maxBetText1 = scene.add.bitmapText(scene.centerX - 150, scene.centerY + 216 + 200, 'gameFont_1', 'BET', 56, 1).setOrigin(0.5);
        slotControls.maxBetText1.depth = depth;
        
        slotControls.spinText = scene.add.bitmapText(scene.centerX - 0, scene.centerY + 165 + 200, 'gameFont_1', 'SPIN', 72, 1).setOrigin(0.5);
        slotControls.spinText.depth = depth;

        slotControls.infoText = scene.add.bitmapText(scene.centerX, scene.centerY + 400 + 200, 'gameFont', 'info', 30, 1).setOrigin(0.5);
        slotControls.infoText.tint = this.slotTextColor;
        slotControls.infoText.setVisible(false);
        slotControls.infoText.depth = depth;

        slotControls.freeSpinCountText = scene.add.bitmapText(scene.centerX, scene.centerY + 360 + 200, 'gameFont_1', '9999', 30, 1).setOrigin(0.5);
        slotControls.freeSpinCountText.tint = this.slotTextColor;
        slotControls.freeSpinCountText.setVisible(false);
        slotControls.freeSpinCountText.depth = depth;
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
            let text3x = popup.scene.add.bitmapText(textXPos, 48, 'gameFont', '3x - ' + price3x, 56, 1).setOrigin(0, 0.5);
            symbContainer.add(text3x);
    
            let text4x = popup.scene.add.bitmapText(textXPos, 0, 'gameFont', '4x - ' + price4x, 56, 1).setOrigin(0, 0.5);
            symbContainer.add(text4x);

            let text5x = popup.scene.add.bitmapText(textXPos, -48, 'gameFont', '5x - ' + price5x, 56, 1).setOrigin(0, 0.5);
            symbContainer.add(text5x);
        };

        function createSpecSymbolPlate(popup, parentContainer, symbSpriteName, posX, posY, info)
        {
            let symbContainer = popup.scene.add.container(posX, posY);
            parentContainer.add(symbContainer);
            let symbIcon = popup.scene.add.sprite(0, 0, symbSpriteName).setOrigin(0.5, 0.5).setScale(0.8);
            symbContainer.add(symbIcon);
    
            let textInfo = popup.scene.add.bitmapText(160, 0, 'gameFont', info, 48, 0).setOrigin(0, 0.5);
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
        let offsetY = -120;

        // add background and panel
        let backGround = popup.scene.add.sprite(0, 40 + offsetY, 'pu_background').setOrigin(0.5).setScale(1, 1.05);
        backGround.setInteractive(); // block bottom controls
        // backGround.setAlpha(0.05);
        // backGround.tint = 0x262a3a;
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, 0 + offsetY, 'info_panel').setOrigin(0.5);
        popup.add(panel);

       // let title = popup.scene.add.sprite(0, -330 + offsetY, 'help_title').setOrigin(0.5);
       // popup.add(title);

        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 695, -290 + offsetY);
        popup.addButton('nextButton','next_button', 'next_button_hover', false, 80, 490 + offsetY);
        popup.addButton('prevButton','prev_button', 'prev_button_hover', false, -80, 490 + offsetY);
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
        let minorTitle =  popup.scene.add.sprite(0, -330, 'minor_title').setOrigin(0.5); // image
        // let minorTitle = popup.scene.add.bitmapText(0, -210, 'gameFont_1', 'MINOR  SYMBOLS', 50, 1).setOrigin(0.5); // text
        minorContainer.add(minorTitle);

        let row1Y = -120;
        let row2Y = row1Y + 270;
        let col1X = -350;
        let colDist = 410;
        let col2X = col1X + colDist;
        let col3X = col2X + colDist;

        // minor row 1
        createSymbolPlate5x(popup, minorContainer, 'CoinsHeap',  col1X , row1Y, 1, 2, 3);
        createSymbolPlate5x(popup, minorContainer, 'Scroll', col2X , row1Y, 1, 3, 5);
        createSymbolPlate5x(popup, minorContainer, 'Fan', col3X , row1Y, 2, 3, 6);

        // minor row 2
        createSymbolPlate5x(popup, minorContainer, 'Sycee', col1X + 0.5 * colDist, row2Y, 2, 3, 7);
        createSymbolPlate5x(popup, minorContainer, 'Teapot', col2X + 0.5 * colDist, row2Y, 2, 3, 8);
        minorContainer.visible = false;

        // create major symbols panel
        let majorContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(majorContainer);
        popup.add(majorContainer);
        let majorTitle =  popup.scene.add.sprite(0, -324, 'major_title').setOrigin(0.5); // image
        // let majorTitle = popup.scene.add.bitmapText(0, -210, 'gameFont_1', 'MAJOR  SYMBOLS', 50, 1).setOrigin(0.5); // text
        majorContainer.add(majorTitle);

        // major row 1
        createSymbolPlate5x(popup, majorContainer , 'J', col1X + 0.5 * colDist, row1Y, 11, 13, 17);
        createSymbolPlate5x(popup, majorContainer , 'Q', col2X + 0.5 * colDist, row1Y, 11, 13, 19);

        // major row 2
        createSymbolPlate5x(popup, majorContainer , 'K', col1X + 0.5 * colDist, row2Y, 11, 14, 20);
        createSymbolPlate5x(popup, majorContainer , 'A', col2X + 0.5 * colDist, row2Y, 11, 15, 25);
        majorContainer.visible = false;

        // create special symbols panel
        let specialContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(specialContainer);
        popup.add(specialContainer);
        let specialTitle =  popup.scene.add.sprite(0, -330, 'special_title').setOrigin(0.5); // image
        // let specialTitle = popup.scene.add.bitmapText(0, -210, 'gameFont_1', 'SPECIAL  SYMBOLS', 50, 1).setOrigin(0.5); // text
        specialContainer.add(specialTitle);
    
        // special row 1
        createSpecSymbolPlate(popup, specialContainer, 'Wild', -350, -155, 'Wild can be used with any symbols \non the reels to create winning \ncombinations (exclude first reel).');
        createSpecSymbolPlate(popup, specialContainer, 'Scatter', -350 , 35, 'Any 5 scatter on the screen \ngive the player  5 free spins.');
        createSpecSymbolPlate(popup, specialContainer, 'Jackpot', -350 , 225, 'Any 6 jackot symbols scattered \non the screen = Jackpot Win.');
        specialContainer.visible = false;

        // create rules panel
        let rulesContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(rulesContainer);
        popup.add(rulesContainer);
        let rulesTitle =  popup.scene.add.sprite(0, -330, 'rules_title').setOrigin(0.5); // image
        // let rulesTitle = popup.scene.add.bitmapText(0, -210, 'gameFont_1', 'RULES', 50, 1).setOrigin(0.5); // text
        rulesContainer.add(rulesTitle);

        let aboutTitle = popup.scene.add.bitmapText(-620, -220, 'gameFont', 'ABOUT  THE  GAME', 48, 0).setOrigin(0,0.5); // text
        rulesContainer.add(aboutTitle);
        let aboutText = popup.scene.add.bitmapText(-620, -180, 'gameFont',
        'China slot is a pack of Slot Games with 3-5 reels and 243 paylines oriented \nfrom left to right. The games have 9 regular symbols that win if three or more \nare lined up in sequence on a payline, beginning from the leftmost position. The \n4 high pay symbols and the 5 low pay symbols.', 48, 0).setOrigin(0, 0); // text
        rulesContainer.add(aboutText);


        let howTitle = popup.scene.add.bitmapText(-620, 80, 'gameFont', 'HOW  TO  PLAY', 48, 0).setOrigin(0,0.5); // text
        rulesContainer.add(howTitle);
        let howText = popup.scene.add.bitmapText(-620, 120, 'gameFont',
        '- Place your bet \n- Press the Spin button to start game \n- You can also use Max Bet button to auto bet \n- Press the AutoSpin button to turn Auto Spin game mode', 48, 0).setOrigin(0, 0); // text
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
        let backGround = popup.scene.add.sprite(0, 0, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        // backGround.tint = 0x262a3a;
        // backGround.setAlpha(0.05);
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'about_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        let title = popup.scene.add.sprite(0, -255 + yOffset, 'about_title').setOrigin(0.5);
        popup.add(title);

        // add logo
        let logo = popup.scene.add.sprite(0, -30 + yOffset, 'logo').setOrigin(0.5);
        popup.add(logo);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 150 + yOffset, 'gameFont', 'NEED HELP?', 38, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
        popup.add(popup.messageText);

        // add buttons
        popup.addButton('supportButton','long_button', 'long_button_hover', false, 0, 230 + yOffset);
        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 235, -205  + yOffset);

        popup['supportButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['supportButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);
        
        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        // add support button text
        popup.supText = popup.scene.add.bitmapText(0, 230 + yOffset, 'gameFont_1', 'SUPPORT', 56, 1).setOrigin(0.5);
        popup.supText.tint = 0xFFFFFF;
        popup.add(popup.supText);
    },

    createSettingsPUHandler: function(popup)
    {    
        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        // backGround.tint = 0x262a3a;
        // backGround.setAlpha(0.5);
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'settings_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        let title = popup.scene.add.sprite(0, -265 + yOffset, 'settings_title').setOrigin(0.5);
        popup.add(title);

        // sound and music text
        popup.soundText = popup.scene.add.bitmapText(-110, -132 + yOffset, 'gameFont', 'SOUNDS', 38, 1).setOrigin(0.5);
        //popup.soundText.tint = 0x4f2930;
        popup.add(popup.soundText);

        popup.musicText = popup.scene.add.bitmapText(110, -132 + yOffset, 'gameFont', 'MUSIC', 38, 1).setOrigin(0.5);
        //popup.musicText.tint = 0x4f2930;
        popup.add(popup.musicText);

        // sound and music buttons
        popup.addButton('soundButton','button_on', 'button_off', true, -110, -75 + yOffset);
        popup.addButton('musicButton','button_on', 'button_off', true, 110, -75 + yOffset);

        popup['soundButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['soundButton'].clickEvent.add(()=>{popup.scene.soundController.soundOn(!popup.scene.soundController._soundOn);}, popup);
        if(!popup.scene.soundController._soundOn) popup['soundButton'].setPressed();

        popup['musicButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['musicButton'].clickEvent.add(()=>{popup.scene.soundController.musicOn(!popup.scene.soundController._musicOn);}, popup);
        if(!popup.scene.soundController._musicOn) popup['musicButton'].setPressed();

        // privacy ant terms buttons
        popup.addButton('privacyButton','extralong_button', 'extralong_button_hover', false, 0, 82 + yOffset);
        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 285, -215 + yOffset);
        popup.addButton('termsButton','extralong_button', 'extralong_button_hover', false, 0, 240 + yOffset);

        popup['privacyButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['privacyButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);
        
        popup['termsButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['termsButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);

        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        // privacy ant terms buttons text
        popup.privacyText = popup.scene.add.bitmapText(0, 82 + yOffset, 'gameFont_1', 'PRIVACY POLICY', 56, 1).setOrigin(0.5);
        popup.privacyText.tint = 0xFFFFFF;
        popup.add(popup.privacyText);

        popup.termsText = popup.scene.add.bitmapText(0, 240 + yOffset, 'gameFont_1', 'TERMS OF USE', 56, 1).setOrigin(0.5);
        popup.privacyText.tint = 0xFFFFFF;
        popup.add(popup.termsText);
    },

    createFreeGamesPUHandler: function(popup)
    {
        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'freespin_panel').setOrigin(0.5);
        popup.add(panel);
        let title = popup.scene.add.sprite(0, -110 + yOffset, 'freespin_title').setOrigin(0.5);
        popup.add(title);
        
        // add caption
        //popup.captionText = popup.scene.add.bitmapText(0, -80, 'gameFont_2', 'START FREE GAME', 33, 1).setOrigin(0.5);
        //popup.captionText.tint = 0xFFFFFF;
        //popup.add(popup.captionText);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 10 + yOffset, 'gameFont', '0', 76, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
        popup.add(popup.messageText);

        // add buttons
        popup.addButton('okButton','long_button', 'long_button_hover', false, 0, 140 + yOffset);
        popup['okButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['okButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});
        // add button text
        popup.okText = popup.scene.add.bitmapText(0, 140 + yOffset, 'gameFont_1', 'START', 56, 1).setOrigin(0.5);
        popup.okText.tint = 0xFFFFFF;
        popup.add(popup.okText);
    },

    createBigWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'bigwin_panel').setOrigin(0.5);
        popup.add(panel);
        let title = popup.scene.add.sprite(0, -90 + yOffset, 'bigwin_title').setOrigin(0.5);
        popup.add(title);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 35 + yOffset, 'gameFont', '0', 76, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
        popup.add(popup.messageText);
    },

    createHugeWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'hugewin_panel').setOrigin(0.5);
        popup.add(panel);
        let title = popup.scene.add.sprite(0, -42 + yOffset, 'hugewin_title').setOrigin(0.5);
        popup.add(title);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 85 + yOffset, 'gameFont', '0', 76, 1).setOrigin(0.5);
        //popup.messageText.tint  = 0x4f2930;
        popup.add(popup.messageText);
    },

    createMegaWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'megawin_panel').setOrigin(0.5);
        popup.add(panel);
        let title = popup.scene.add.sprite(0, -80 + yOffset, 'megawin_title').setOrigin(0.5);
        popup.add(title);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 50 + yOffset, 'gameFont', '0', 76, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
        popup.add(popup.messageText);
    },

    createJackpotWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'jackpotwin_panel').setOrigin(0.5);
        popup.add(panel);
        let title = popup.scene.add.sprite(0, -42 + yOffset, 'jackpotwin_title').setOrigin(0.5);
        popup.add(title);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 80 + yOffset, 'gameFont', '0', 76, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
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
        this.framesCount = 6;
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
