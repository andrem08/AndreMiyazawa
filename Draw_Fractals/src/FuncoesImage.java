//NOME: André Miyazawa
//N0 USP: 11796187
public class FuncoesImage extends Image {
    //Construtores
    public FuncoesImage(int largura, int altura, int colorR, int colorG, int colorB) {
        super(largura, altura, colorR, colorG, colorB);
    }

    public FuncoesImage(int largura, int altura) {
        super(largura, altura);
    }

    public void dragonCurve(int px, int py, int qx, int qy, int l) {
        int d = (int) Math.sqrt(Math.pow(px - qx, 2) + Math.pow(py - qy, 2));
        //Caso a distancia forz menor do que o limiar:
        if (d <= l) {
            drawLine(px, py, qx, qy);
            return;
        } else {


            //Distancia em modulo de px e qx, e py e qy.
            int dx = qx - px;
            int dy = qy - py;

            //Rotacionar o seguimento AC em 60 graus para criar o ponto bxy.
            int bx = Math.round(px + dx/2 - dy/2);
            int by = Math.round(qy - dy/2 + dx/2);
            //Chamar a funcao recursivamente.
            dragonCurve(px, py, bx, by, l);
            //kochCurve(bx, by,px,py, l);
            //kochCurve(bx, by, qx, qy, l);
            dragonCurve(qx, qy,bx,by, l);
        }
    }
    public void levyCurve(int px, int py, int qx, int qy, int l) {
        int d = (int) Math.sqrt(Math.pow(px - qx, 2) + Math.pow(py - qy, 2));
        //Caso a distancia forz menor do que o limiar:
        if (d <= l) {
            drawLine(px, py, qx, qy);
            return;
        } else {


            //Distancia em modulo de px e qx, e py e qy.
            int dx = qx - px;
            int dy = qy - py;

            //Rotacionar o seguimento AC em 60 graus para criar o ponto bxy.
            int bx = Math.round(px + dx/2 - dy/2);
            int by = Math.round(qy - dy/2 + dx/2);
            //Chamar a funcao recursivamente.
            levyCurve(px, py, bx, by, l);
            levyCurve(bx, by, qx, qy, l);
        }
    }
    public void kochCurve(int px, int py, int qx, int qy, int l) {
        //Caso o valor do limitante seja invalido
        if(l <= 0)
            return;
        //Distancia entre os dois pontos
        int d = (int) Math.sqrt(Math.pow(px - qx, 2) + Math.pow(py - qy, 2));
        //Caso a distancia for menor do que o limiar:
        if (d <= l) {
            drawLine(px, py, qx, qy);
        } else {


            //Distancia em modulo de px e qx, e py e qy.
            int dx = qx - px;
            int dy = qy - py;

            int ax, ay, cx, cy;

            //Construir os tres pontos entre pxy e qxy.
            ax = (int) Math.round((dx / 3.0 + px));
            cy = (int) Math.round((qy - dy / 3.0));
            cx = (int) Math.round((2 * dx / 3.0 + px));
            ay = (int) Math.round((qy - 2 * dy / 3.0));


            //Rotacionar o seguimento AC em 60 graus para criar o ponto bxy.
            int bxTemp = cx - ax;
            int byTemp = ay - cy;
            int bx = (int) Math.round(ax + bxTemp * Math.cos(Math.toRadians(60)) - byTemp * Math.sin(Math.toRadians(60)));
            int by = (int) Math.round(ay - bxTemp * Math.sin(Math.toRadians(60)) - byTemp * Math.cos(Math.toRadians(60)));

            //Chamar a funcao recursivamente.
            kochCurve(px, py, ax, ay, l);
            kochCurve(ax, ay, bx, by, l);
            kochCurve(bx, by, cx, cy, l);
            kochCurve(cx, cy, qx, qy, l);
        }
    }
    public void sierpinskiTriangle(int px, int py, int qx, int qy, int l) {
        //Caso o valor do limitante seja invalido
        if(l <= 0)
            return;
        //Distancia entre os dois pontos
        int d = (int) Math.sqrt(Math.pow(px - qx, 2) + Math.pow(py - qy, 2));
        //Caso a distancia for menor do que o limiar:
        if (d <= l) {
            drawLine(px, py, qx, qy);
        } else {


            //Distancia em modulo de px e qx, e py e qy.
            int dx = Math.round((qx - px)/2 + px);
            int dy = Math.round(qy - (qy - py)/2);

            //Construir os tres pontos entre pxy e qxy.


            //Rotacionar o seguimento AC em 60 graus para criar o ponto bxy.
            int bxTemp = dx - qx;
            int byTemp = dy - qy;
            int bx = (int) Math.round(dx + bxTemp * Math.cos(Math.toRadians(-60)) + byTemp * Math.sin(Math.toRadians(-60)));
            int by = (int) Math.round(qy - bxTemp * Math.sin(Math.toRadians(-60)) - byTemp * Math.cos(Math.toRadians(-60)));


            System.out.printf("Px = %d, Py = %d\n",px,py);
            System.out.printf("Qx = %d, Qy = %d\n",qx,qy);
            System.out.printf("Dx = %d, Dy = %d\n",dx,dy);
            System.out.printf("Bx = %d, By = %d\n\n",bx,by);
            //Chamar a funcao recursivamente.
            sierpinskiTriangle(px, py, dx, dy, l);
            sierpinskiTriangle(dx, dy, qx, qy, l);
            sierpinskiTriangle(dx, dy, bx, by, l);
        }
    }
    public void regionFill(int x, int y, int reference_rgb) {
        //Caso seguir todas as especificacoes modifica a cor do pixel.
        if (paintPixel(x, y, reference_rgb) != null) {
            //Caso nao tenha mudado de cor, ou seja, ja estava pintado
            if (paintPixel(x, y, reference_rgb) != null)
                return;
            //Modifica a cor da coluna até encontrar uma barreira em no maior y e no menor y.
            int max = maxy(x, y + 1, reference_rgb);
            int min = miny(x, y - 1, reference_rgb);

            //Chama recursivamente à direita.
            x++;
            for (int i = 0; i <= (max - min); i++) {
                regionFill(x, max - i, reference_rgb);
            }
            //Chama recursivamente à esquerda.
            x = x - 2;
            for (int i = 0; i <= (max - min); i++) {
                regionFill(x, max - i, reference_rgb);
            }

        }
    }

    public int maxy(int x, int y, int reference_rgb) {
        //Em um determinado x, encontra o maior y até alguma barreira.
        int max = y;
        //Se cumprir as especificacoes modifica a cor do pixel.
        while (paintPixel(x, max, reference_rgb) != null)
            max++;
        return --max;
    }

    public int miny(int x, int y, int reference_rgb) {
        //Em um determinado x, encontra o menor y até alguma barreira.
        int min = y;
        //Se cumprir as especificacoes modifica a cor do pixel.
        while (paintPixel(x, min, reference_rgb) != null)
            min--;
        return ++min;

    }
    //Especificacoes para poder ser pintado.
    public Integer paintPixel(int x, int y, int reference_rgb) {
        //Se x e y estiverem dentro da imagem:
        if ((x >= 0) && (y >= 0) && (x < getWidth()) && (y < getHeight())) {
            //Se a cor da referencia for igual a cor do pixel:
            if (getPixel(x, y) == reference_rgb) {
                setPixel(x,y);
                return 1;
            }
        }
        //Caso contrario retorna null.
        return null;
    }
}
