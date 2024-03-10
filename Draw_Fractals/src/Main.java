import java.util.*;
import java.io.*;
//NOME: André Miyazawa
//N0 USP: 11796187
public class Main {

    public static void generateImage(String inputFileName, String outputFileName) throws IOException {

        Scanner scanner = new Scanner(new File(inputFileName));
        int Largura = scanner.nextInt();
        int Altura = scanner.nextInt();
        int colorR = scanner.nextInt();
        int colorG = scanner.nextInt();
        int colorB = scanner.nextInt();
        FuncoesImage fImage = new FuncoesImage(Largura, Altura, colorR, colorG, colorB);

        while(scanner.hasNext()){
            String command = scanner.next();

            if(command.equals("SET_COLOR")){
                colorR = scanner.nextInt();
                colorG = scanner.nextInt();
                colorB = scanner.nextInt();
                fImage.setColor(colorR,colorG,colorB);
            }

            if(command.equals("SET_PIXEL")){
                fImage.setPixel(scanner.nextInt(), scanner.nextInt());
            }

            if(command.equals("DRAW_LINE")){

                fImage.drawLine(scanner.nextInt(), scanner.nextInt(), scanner.nextInt(), scanner.nextInt());
            }

            if(command.equals("KOCH_CURVE")){
                //Chama a funcao kochCurve em imageEx ultilizando 5 parametros.
                fImage.kochCurve(scanner.nextInt(), scanner.nextInt(), scanner.nextInt(), scanner.nextInt(), scanner.nextInt());
            }
            if(command.equals("DRAGON_CURVE")){
                //Chama a funcao kochCurve em imageEx ultilizando 5 parametros.
                fImage.dragonCurve(scanner.nextInt(), scanner.nextInt(), scanner.nextInt(), scanner.nextInt(), scanner.nextInt());
            }
            if(command.equals("LEVY_CURVE")){
                //Chama a funcao kochCurve em imageEx ultilizando 5 parametros.
                fImage.levyCurve(scanner.nextInt(), scanner.nextInt(), scanner.nextInt(), scanner.nextInt(), scanner.nextInt());
            }
            if(command.equals("SIERPINSKI_TRIANGLE")){
                //Chama a funcao kochCurve em imageEx ultilizando 5 parametros.
                fImage.sierpinskiTriangle(scanner.nextInt(), scanner.nextInt(), scanner.nextInt(), scanner.nextInt(), scanner.nextInt());
            }

            if(command.equals("REGION_FILL")){
                int x = scanner.nextInt();
                int y = scanner.nextInt();
                //Se as coordenadas nao estiverem dentro da imagem chama a funcao.
                if ((x >= 0) && (y >= 0) && x < fImage.getWidth() && y < fImage.getHeight())
                    fImage.regionFill(x, y,  fImage.getPixel(x,y));

            }
        }

        fImage.save(outputFileName);
    }

    public static void main(String [] args){


        if(args.length != 2){

            System.out.println("Uso: java " + Main.class.getName() + " Entrada.txt Saida.png");
            System.exit(1);
        }

        try{
            generateImage(args[0], args[1]);
        }
        catch(IOException e){

            System.out.println("Problem generating image... :(");
            e.printStackTrace();
        }
    }
}
