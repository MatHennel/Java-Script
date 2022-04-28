#include <stdio.h>
#include <math.h>

int main()
{
    int a , b ;
    printf("Digite dois numeros: ");
    scanf("%i %i", &a , &b);

    if((a < 1 || a > 7) && (b < 1 || b > 7))
    {
        printf("[Invalido , Invalido]");
    }
    else
    {
        if(a == 1)
        {
            printf("[Domingo , ");
        }
        else if(a == 2)
        {
            printf("[Segunda , ");
        }else{
            printf("[Terça, ");
        }if( b == 1){
            printf("Domingo]");
        }else if(b == 2){
            printf("Segunda]");
        }else{
            printf("Terça]");
        }
    }




    return 0;
}