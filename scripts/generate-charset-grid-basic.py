# /Users/stephennixon/type-repos/recursive/venv/bin/python
# coding=utf8

import html

html ="""\
<script>
    export let animationState;
</script>
<section class="charset">

    <h2>Characters</h2>
    
    <!-- BEGIN CHARSET GRID -->
    <div class="grid" id="grid" style="--animationState: {animationState};">
"""
        

import unicodedata

# this string was pulled from RoboFont Space Center, then edited by hand

# u = 'AÀÁÂÃÄÅĀĂĄǍǺȀȂẠẢẤẦẨẪẬẮẰẲẴẶBCÇĆĈĊČDĎEÈÉÊËĒĔĖĘĚȄȆẸẺẼẾỀỂỄỆFGĜĞĠĢǦHĤIÌÍÎÏĨĪĬĮİȈȊỈỊJĴKĶLĹĻĽMNÑŃŅŇOÒÓÔÕÖŌŎŐƠǪȌȎȪȬȰỌỎỐỒỔỖỘỚỜỞỠỢPQRŔŖŘȐȒSŚŜŞŠȘTŢŤȚUÙÚÛÜŨŪŬŮŰŲƯǓȔȖỤỦỨỪỬỮỰVWŴẀẂẄXYÝŶŸȲỲỴỶỸZŹŻŽÆǼÐØǾÞĐĦĲĿŁŊŒŦƏǄǇǊẞΩaàáâãäåāăąǎǻȁȃạảấầẩẫậắằẳẵặbcçćĉċčdďeèéêëēĕėęěȅȇẹẻẽếềểễệfgĝğġģǧhĥiìíîïĩīĭįȉȋỉịjĵkķlĺļľmnñńņňoòóôõöōŏőơǫȍȏȫȭȱọỏốồổỗộớờởỡợpqrŕŗřȑȓsśŝşšștţťțuùúûüũūŭůűųưǔȕȗụủứừửữựvwŵẁẃẅxyýÿŷȳỳỵỷỹzźżžßæǽðøǿþđħıĳĸŀłŋœŧǆǉǌəπǅǈǋʹʺʼªº̧̨̛̣̤̦̮̱̀́̂̃̄̆̇̈̉̊̋̌̏̑̒0123456789¹²³¼½¾⅓⅔⅛⅜⅝⅞_-‐–—()[]{}⟨⟩#%‰\'\"‘’“”‚„‹›«»*†‡.,:;…!¡?¿/\⁄|¦&§¶ℓ№·•′″+−±÷×=<>≤≥≈≠¬⁒←↑→↓∂∆∏∑∕µ∙√∞∫$¢£¤¥₡₤₦₩₫€ƒ₭₱₲₴₵₸₹₺₼₽^~´`˝ˆˇ˘˜¯¨˙˚¸˛©®™°↖↗↘↙◊♡♥✓ﬀﬁﬂﬃﬄ₀₁₂₃₄₅₆₇₈₉⁰⁴⁵⁶⁷⁸⁹@'

u = 'AÀÁÂÃÄÅĀĂĄǍǺȀȂẠẢẤẦẨẪẬẮẰẲẴẶBCÇĆĈĊČDĎEÈÉÊËĒĔĖĘĚȄȆẸẺẼẾỀỂỄỆFGĜĞĠĢǦHĤIÌÍÎÏĨĪĬĮİȈȊỈỊJĴKĶLĹĻĽMNÑŃŅŇOÒÓÔÕÖŌŎŐƠǪȌȎȪȬȰỌỎỐỒỔỖỘỚỜỞỠỢPQRŔŖŘȐȒSŚŜŞŠȘTŢŤȚUÙÚÛÜŨŪŬŮŰŲƯǓȔȖỤỦỨỪỬỮỰVWŴẀẂẄXYÝŶŸȲỲỴỶỸZŹŻŽÆǼÐØǾÞĐĦĲĿŁŊŒŦƏǄǇǊẞΩЂЄЅІЇЈЉЊЋЏАӐӒБВГЃДЕЀЁӖЖӁӜЗӞИЍӢӤКЌЛМНОӦПРСТУЎӮӰӲФХЦЧӴШЩЪЫӸЬЭЮЯѢѪѲѴҐҒҔҖҘҚҜҠҢҤҪҮҰҲҶҸҺӀӋӔӘӨӶԚԜaàáâãäåāăąǎǻȁȃạảấầẩẫậắằẳẵặbcçćĉċčdďeèéêëēĕėęěȅȇẹẻẽếềểễệfgĝğġģǧhĥiìíîïĩīĭįȉȋỉịjĵkķlĺļľmnñńņňoòóôõöōŏőơǫȍȏȫȭȱọỏốồổỗộớờởỡợpqrŕŗřȑȓsśŝşšștţťțuùúûüũūŭůűųưǔȕȗụủứừửữựvwŵẁẃẅxyýÿŷȳỳỵỷỹzźżžßæǽðøǿþđħıĳĸŀłŋœŧǆǉǌəπаӑӓбвгѓдеѐёӗжӂӝзӟийѝӣӥкќлмноӧпрстуўӯӱӳфхцчӵшщъыӹьэюяђєѕіїјљњћџѣѫѳѵґғҕҗҙқҝҡңҥҫҳҷҹһӌӏӕәөӷԛԝǅǈǋʹʺʼªº̧̨̛̣̤̦̮̱̀́̂̃̄̆̇̈̉̊̋̌̏̑̒0123456789₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹¼½¾⅓⅔⅛⅜⅝⅞_-‐–—()[]{}⟨⟩\#%‰\'\"‘’“”‚„‹›«»*†‡.,:;…!¡?¿/\\⁄|¦@&§¶ℓ№©®™°·•′″+−±÷×=<>≤≥≈≠¬⁒∂∆∏∑∕∙√∞µ∫$¢£¤¥₡₤₦₩₫€ƒ₭₮₱₲₴₵₸₹₺₼₽฿₨₪₾₿^~´`˝ˆˇ˘˜¯¨˙˚¸˛⏸◆◇○●■□▪▫▲△▶▷▼▽◀◁▴▵▸▹▾▿◂◃♡♥◊✓←↑→↓↖↗↘↙@'

path = 'src/CharSet.svelte'

def getUnicodeName(c):
    try:
        return unicodedata.name(c).lower()
    except ValueError:
        if c == "":
            return "latin capital ligature ij with acute"
        elif c == "":
            return "latin small ligature ij with acute"
        else:
            return ""

for i, c in enumerate(u):
    print(c)

    unicodeName = getUnicodeName(c)
    charOrd = ord(c)

    # convert left brace to HTML entity to avoid Svelte issue
    if c == "{":
        c = "&#123;"
    if c == "<":
        c = "&lt;"

    if i % 1 == 1:
        html += f"""\
            <div>
                <span class="up">
                    {c}
                </span>
            </div>
"""
    else:
        html += f"""\
            <div>
                <span class="down">
                    {c}
                </span>
            </div>
"""

html += """\
    <!-- END CHARSET GRID -->

</section>


<style>

    section {
        
        background: var(--altBg);
        color: var(--altText);
        border-radius: 1.25rem;
        margin: 0 0.5rem;
        font-size: 3rem;
        line-height: 2;
        text-align: center;
        display: block;

    }

    h2 {
        text-align: center;
        text-transform: uppercase;
        font-size: 2rem;
        letter-spacing: 0.05em;
        font-variation-settings: "IRGL" 100;
        padding-top: 3rem;

    }


    @keyframes trackInOut {
        0% {
            font-variation-settings: "TRAK" 50, "BNCE" 0;
        }
        25% {
            font-variation-settings: "TRAK" 250, "BNCE" 100;
        }
                50% {
            font-variation-settings: "TRAK" 50, "BNCE" 0;
        }
        75% {
            font-variation-settings: "TRAK" 250, "BNCE" -100;
        }
        100% {
            font-variation-settings: "TRAK" 50, "BNCE" 0;
        }
    }

    #grid {
        padding: 0ch 1ch 1.25ch;
        display:grid;
        grid-gap:0;
        grid-template-columns: repeat(auto-fit, minmax(3ch, 1fr) );
    }

    #grid span, #grid span.down {
        text-align: center;
    }

    @media (pointer:fine) {
        #grid:hover span {
            animation: slowShinyText 1s alternate infinite ease-in-out;
            animation-play-state: var(--animationState);
        }
        #grid:hover span.down {
            animation: slowShinyText 1s reverse alternate infinite ease-in-out;
            animation-play-state: var(--animationState);
        }
        @keyframes slowShinyText {
            from {
                font-variation-settings: "BNCE" -100;
            }
            to {
                font-variation-settings: "BNCE" 100;
            }
        }
    }



    @media (max-width: 500px) {
        section {
            margin: 0 0.25rem;
        }
        h2 {
            margin: 0;
            padding-top: 1.5rem;
            font-size: 9vw;
        }
        #grid {
            grid-template-columns: repeat(auto-fit, minmax(2ch, 1fr));
            padding: 0.625ch .5ch;
            margin: 0 0.25rem;
        }
        section {
            font-size: 1.5rem;
        }
    }

</style>
"""



with open(path, 'w') as file:
    file.write(html)
    print('saved to ', str(path)) 